import {DefaultCrudRepository} from '@loopback/repository';
import {Medicos, MedicosRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MedicosRepository extends DefaultCrudRepository<
  Medicos,
  typeof Medicos.prototype.id,
  MedicosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Medicos, dataSource);
  }
}
