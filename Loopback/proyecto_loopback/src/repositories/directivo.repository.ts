import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Directivo, DirectivoRelations, Empresa, Empleado} from '../models';
import {EmpresaRepository} from './empresa.repository';
import {EmpleadoRepository} from './empleado.repository';

export class DirectivoRepository extends DefaultCrudRepository<
  Directivo,
  typeof Directivo.prototype.directivoid,
  DirectivoRelations
> {

  public readonly empresa: BelongsToAccessor<Empresa, typeof Directivo.prototype.directivoid>;

  public readonly empleados: HasManyRepositoryFactory<Empleado, typeof Directivo.prototype.directivoid>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('EmpresaRepository') protected empresaRepositoryGetter: Getter<EmpresaRepository>, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>,
  ) {
    super(Directivo, dataSource);
    this.empleados = this.createHasManyRepositoryFactoryFor('empleados', empleadoRepositoryGetter,);
    this.registerInclusionResolver('empleados', this.empleados.inclusionResolver);
    this.empresa = this.createBelongsToAccessorFor('empresa', empresaRepositoryGetter,);
    this.registerInclusionResolver('empresa', this.empresa.inclusionResolver);
  }
}
