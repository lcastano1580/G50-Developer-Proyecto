import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Empresa} from './empresa.model';
import {Directivo} from './directivo.model';

@model({settings: {strict: false}})
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  empleadoid?: string;

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

  @belongsTo(() => Empresa)
  empresaId: string;

  @property({
    type: 'string',
  })
  directivoId?: string;

  @hasMany(() => Directivo)
  directivos: Directivo[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
