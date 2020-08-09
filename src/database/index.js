import Sequelize from 'sequelize';

import destinatario from '../app/models/destinatario';
import Entregador from '../app/models/Entregador';
import DataBaseConfig from '../config/database';
import user from '../app/models/UserAdmin';
import File from '../app/models/File';

const models = [destinatario, user, Entregador, File];
class Database{
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(DataBaseConfig);
    models
    .map(model => model.init(this.connection))
    .map(model => model.associate && model.associate(this.connection.models));
    
  }
}
export default new Database();