import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import { Cliente } from '../models';
import {ClienteRepository} from '../repositories'
import { Llaves } from '../config/llaves';
const generatePassword = require('password-generator');
const CryptoJs = require('crypto-js');
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticasionService {
  constructor(@repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
  ) {} 

  /*
   * Add service methods here
   */ 

  generarClaveAleatoria = ():String => {
    return generatePassword(12, false).toString();
  };
  cifrarClave(clave: string){
    return CryptoJs.MD5(clave).toString();
  }
  IdentificarCliente(usuario: string, clave: string){
    try{
      let c = this.clienteRepository.findOne({where: {email: usuario, clave: clave}});
      if(c){
        return c;
      }
        return false;
    }catch{
      return false;
    }
  }

  GenerarTokenJWT(cliente:Cliente){
    let token = jwt.sign({
      data:{
        id: cliente.clienteid,
        email: cliente.email,
        nombre: cliente.nombre + " " + cliente.apellidos
      }
    },
      Llaves.claveJWT);
      return token;
  }

  validarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    }catch{
      return false;
    }
  }
}
