import Sequelize from 'sequelize';

import destinatario from '../app/models/destinatario';
import  DataBaseConfig from '../config/database';
import user from '../app/models/UserAdmin';

const models = [destinatario, user];
class Database{
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(DataBaseConfig);
    models.map(model => model.init(this.connection));
  }
}
export default new Database();