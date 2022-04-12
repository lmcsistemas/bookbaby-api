"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/User/CreateUserController");
const AuthUserController_1 = require("./controllers/User/AuthUserController");
const DetailUserController_1 = require("./controllers/User/DetailUserController");
const CreateCriancaController_1 = require("./controllers/Crianca/CreateCriancaController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const DetailCriancaController_1 = require("./controllers/Crianca/DetailCriancaController");
const UpdateCriancaController_1 = require("./controllers/Crianca/UpdateCriancaController");
const DetailCriancaByUserController_1 = require("./controllers/Crianca/DetailCriancaByUserController");
const CreateAgendaController_1 = require("./controllers/Agenda/CreateAgendaController");
const DetailAgendaCrontroller_1 = require("./controllers/Agenda/DetailAgendaCrontroller");
const ListAgendaByChildController_1 = require("./controllers/Agenda/ListAgendaByChildController");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/teste', (req, res) => {
    return res.json({ ok: true });
    //throw new Error("error ");
});
router.post('/testes', (req, res) => {
    return res.json({ ok: true });
    //throw new Error("error ");
});
//Rota de criar Usuários
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/login', new AuthUserController_1.AuthUserController().handle);
router.get('/detail', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
//Rotas de Crianças
router.post('/crianca', isAuthenticated_1.isAuthenticated, new CreateCriancaController_1.CreateCriancaController().handle);
router.get('/crianca', isAuthenticated_1.isAuthenticated, new DetailCriancaController_1.DetailCriancaController().handle);
router.put('/crianca', isAuthenticated_1.isAuthenticated, new UpdateCriancaController_1.UpdateCriancaController().handle);
router.get('/criancaUser', isAuthenticated_1.isAuthenticated, new DetailCriancaByUserController_1.DetailCriancaByUserController().handle);
//agenda
router.post('/agenda', isAuthenticated_1.isAuthenticated, new CreateAgendaController_1.CreateAgendaController().handle);
router.get('/agenda', isAuthenticated_1.isAuthenticated, new DetailAgendaCrontroller_1.DetailAgendaController().handle);
router.get('/agenda-lista', isAuthenticated_1.isAuthenticated, new ListAgendaByChildController_1.ListAgendaByChildController().handle);
