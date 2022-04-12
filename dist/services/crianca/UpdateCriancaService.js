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
exports.UpdateCriancaService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateCriancaService {
    execute({ id, name, cpf, dtnascimento }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('Informe a criança a ser alterada.');
            }
            if (!name || !cpf || !dtnascimento) {
                throw new Error('Informe o nome, CPF e Data de Nascimento');
            }
            const crianca = yield prisma_1.default.crianca.update({
                data: { name, cpf, dtnascimento },
                where: { id: id }
            });
            return crianca;
        });
    }
}
exports.UpdateCriancaService = UpdateCriancaService;
