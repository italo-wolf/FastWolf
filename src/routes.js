import {Router} from 'express';
import DestinatarioController from './app/controllers/destinatarioController';
import SessionController from './app/controllers/sessionController';
import authHeader from './app/middlewares/auth'


const routes =  new Router();

routes.post('/usersession', SessionController.store);

routes.use(authHeader);
routes.post('/destinatario',DestinatarioController.store);
routes.post('/update', DestinatarioController.update)

export default routes;
