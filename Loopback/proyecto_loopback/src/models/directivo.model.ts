import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Empresa} from './empresa.model';
import {Empleado} from './empleado.model';

@model({settings: {strict: false}})
export class Directivo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  directivoid?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  categoria: string;

  @belongsTo(() => Empresa)
  empresaId: string;

  @hasMany(() => Empleado)
  empleados: Empleado[];

  @property({
    type: 'string',
  })
  empleadoId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Directivo>) {
    super(data);
  }
}

export interface DirectivoRelations {
  // describe navigational properties here
}

export type DirectivoWithRelations = Directivo & DirectivoRelations;
