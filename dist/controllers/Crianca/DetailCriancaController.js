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
exports.DetailCriancaController = void 0;
const DetailCriancaService_1 = require("../../services/crianca/DetailCriancaService");
class DetailCriancaController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf } = req.query;
            console.log('cpf', cpf);
            const detailCriancaService = new DetailCriancaService_1.DetailCriancaService();
            const crianca = yield detailCriancaService.execute(cpf);
            return res.json(crianca);
        });
    }
}
exports.DetailCriancaController = DetailCriancaController;
