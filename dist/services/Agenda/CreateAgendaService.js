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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAgendaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateAgendaService {
    execute({ almoco, janta, lanche, informacoes, precisa, criancaId }) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('dnetro do service', { almoco, janta, lanche, informacoes, precisa, criancaId });
            const agenda = prisma_1.default.agenda.create({
                data: { almoco, janta, lanche, informacoes, precisa, criancaId },
                select: { almoco: true, janta: true, lanche: true, informacoes: true, precisa: true, criancaId: true }
            });
            return agenda;
        });
    }
}
exports.CreateAgendaService = CreateAgendaService;
