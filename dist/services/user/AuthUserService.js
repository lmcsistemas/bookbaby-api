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
exports.AuthUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            //verificar se o usuario existe
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (!user) {
                throw new Error("Usuário e Senha inválidos");
            }
            //verificando se a senha esta correta. 
            const passwordMath = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!passwordMath) {
                throw new Error("sssUsuário e Senha inválidos");
            }
            //gerar o token JWT e dados do Usuário
            const token = (0, jsonwebtoken_1.sign)({
                name: user.name,
                email: user.email,
            }, process.env.JWT_SECRET, {
                subject: user.id,
                expiresIn: '30d'
            });
            //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFyaWFzaWx2YSIsImVtYWlsIjoibWFyaWFzaWx2YUBnbWFpbC5jb20iLCJpYXQiOjE2NDgzMTI4NDYsImV4cCI6MTY1MDkwNDg0Niwic3ViIjoiMjU5MmUwM2YtODg0MS00ZTkyLThmNWMtNTJiN2E5ZGMwOWE5In0.EWXHijL1TLkG3xYoSD12CGlUHRIiYv_xmUsYu5P3ogU
            return { id: user.id, name: user.name, email: user.email, token: token };
        });
    }
}
exports.AuthUserService = AuthUserService;
