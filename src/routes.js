import {Router} from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import DestinatarioController from './app/controllers/destinatarioController';
import SessionController from './app/controllers/sessionController';
import FileController from './app/controllers/FileController';
import EntregadorController from './app/controllers/EntregadorController';
import authHeader from './app/middlewares/auth'


const routes =  new Router();
const upload = multer(multerConfig);

routes.post('/usersession', SessionController.store);



routes.use(authHeader);
routes.post('/destinatario',DestinatarioController.store);
routes.post('/update', DestinatarioController.update)

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/entregador', EntregadorController.store);

export default routes;
