import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Empleado, EmpleadoRelations, Empresa, Directivo} from '../models';
import {EmpresaRepository} from './empresa.repository';
import {DirectivoRepository} from './directivo.repository';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.empleadoid,
  EmpleadoRelations
> {

  public readonly empresa: BelongsToAccessor<Empresa, typeof Empleado.prototype.empleadoid>;

  public readonly directivos: HasManyRepositoryFactory<Directivo, typeof Empleado.prototype.empleadoid>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('EmpresaRepository') protected empresaRepositoryGetter: Getter<EmpresaRepository>, @repository.getter('DirectivoRepository') protected directivoRepositoryGetter: Getter<DirectivoRepository>,
  ) {
    super(Empleado, dataSource);
    this.directivos = this.createHasManyRepositoryFactoryFor('directivos', directivoRepositoryGetter,);
    this.registerInclusionResolver('directivos', this.directivos.inclusionResolver);
    this.empresa = this.createBelongsToAccessorFor('empresa', empresaRepositoryGetter,);
    this.registerInclusionResolver('empresa', this.empresa.inclusionResolver);
  }
}
