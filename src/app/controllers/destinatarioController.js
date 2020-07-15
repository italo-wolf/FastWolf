import Destinatario from '../models/destinatario';

class DestinatarioController {
  async store(req, res) {

    const destinatarioExist = await Destinatario.findOne({ where: { nome: req.body.nome } });
    if (destinatarioExist) {
      return res.status(400).json({ error: 'Destinatario existe' });
    }
    const destinatario = await Destinatario.create(req.body);
    return res.json(destinatario);

  }

  async update(req, res) {
  const {id} = req.body;

  const destinatario = await Destinatario.findByPk(req.body.id);
  if(!destinatario){
    return res.status(400).json({error: 'No exist'});
  }
  const {nome, cidade} = await destinatario.update(req.body);
  return res.json(destinatario);
  }
}


export default new DestinatarioController();