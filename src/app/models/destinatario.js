import Sequelize, {Model} from 'sequelize';

class Destinatario extends Model{
    static init(sequelize){
      super.init({
        nome: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.INTEGER,
        estado: Sequelize.STRING,
        cidade: Sequelize.STRING,
        cep: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
      );


    }
}
export default Destinatario;