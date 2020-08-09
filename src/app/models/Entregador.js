import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class Entregador extends Model {
  static init(sequelize) {
    super.init(
      {
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
     },
     {
       sequelize
     }
    );
   
     this.addHook('beforeSave', async entregador =>{
       if(entregador.password){
        entregador.password_hash = await bcrypt.hash(entregador.password, 9);
       }
     });
     return this;
  }
  
  static associate(models){
    this.belongsTo(models.File, {foreignKey:'avatar_id'});
  }
  checkPassword(password){
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Entregador;