import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/User/CreateUserController';
import { AuthUserController } from './controllers/User/AuthUserController'; 
import { DetailUserController } from './controllers/User/DetailUserController';
import { CreateCriancaController } from './controllers/Crianca/CreateCriancaController';


import { isAuthenticated } from './middlewares/isAuthenticated';
import { DetailCriancaController } from './controllers/Crianca/DetailCriancaController';
import { UpdateCriancaController } from './controllers/Crianca/UpdateCriancaController';
import { DetailCriancaByUserController } from './controllers/Crianca/DetailCriancaByUserController';
import { CreateAgendaController } from './controllers/Agenda/CreateAgendaController';
import { DetailAgendaController } from './controllers/Agenda/DetailAgendaCrontroller';
import { ListAgendaByChildController } from './controllers/Agenda/ListAgendaByChildController';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ok: true})
   //throw new Error("error ");
})


router.post('/testes', (req: Request, res: Response) => {
    return res.json({ok: true})
   //throw new Error("error ");
})

//Rota de criar Usuários
router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle);
router.get('/detail', isAuthenticated, new DetailUserController().handle);


//Rotas de Crianças
router.post('/crianca', isAuthenticated, new CreateCriancaController().handle);
router.get('/crianca', isAuthenticated, new DetailCriancaController().handle);
router.put('/crianca', isAuthenticated, new UpdateCriancaController().handle);
router.get('/criancaUser',isAuthenticated, new DetailCriancaByUserController().handle);

//agenda
router.post('/agenda', isAuthenticated, new CreateAgendaController().handle);
router.get('/agenda',isAuthenticated, new DetailAgendaController().handle);

router.get('/agenda-lista',isAuthenticated, new ListAgendaByChildController().handle);



export { router } ; 