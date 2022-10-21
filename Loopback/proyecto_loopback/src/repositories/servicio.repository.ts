import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Servicio, ServicioRelations, Empresa, Cliente} from '../models';
import {EmpresaRepository} from './empresa.repository';
import {ClienteRepository} from './cliente.repository';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.servicioid,
  ServicioRelations
> {

  public readonly empresa: BelongsToAccessor<Empresa, typeof Servicio.prototype.servicioid>;

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Servicio.prototype.servicioid>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('EmpresaRepository') protected empresaRepositoryGetter: Getter<EmpresaRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Servicio, dataSource);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    this.empresa = this.createBelongsToAccessorFor('empresa', empresaRepositoryGetter,);
    this.registerInclusionResolver('empresa', this.empresa.inclusionResolver);
  }
}
