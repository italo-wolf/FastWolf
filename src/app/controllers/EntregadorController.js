import Entregador from '../models/Entregador';
import UserAdmin from '../models/UserAdmin';

class EntregadorController{

  async store(req, res){
    const AdminTrue = await UserAdmin.findByPk(req.userid);
    if(!AdminTrue){
      return res.status(401).json({error: 'User is not a Admin'});
    }
    

    const entregador = await Entregador.create(req.body);
    return res.json(entregador);


  }

}

export default new EntregadorController();