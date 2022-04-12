"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgendaController = void 0;
const CreateAgendaService_1 = require("../../services/Agenda/CreateAgendaService");
class CreateAgendaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { almoco, janta, lanche, informacoes, precisa, criancaId } = req.body;
            if (!criancaId) {
                throw new Error("Informe a crianca");
            }
            const createAgendaService = new CreateAgendaService_1.CreateAgendaService();
            const agenda = yield createAgendaService.execute({ almoco, janta, lanche, informacoes, precisa, criancaId });
            return res.json(agenda);
        });
    }
}
exports.CreateAgendaController = CreateAgendaController;
