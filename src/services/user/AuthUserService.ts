import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'
import { sign } from 'jsonwebtoken';

interface AuthRequest{
    email: string;
    password: string
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        //verificar se o usuario existe
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        if(!user){
            throw new Error("Usuário e Senha inválidos")
        }

        //verificando se a senha esta correta. 
        const passwordMath = await compare(password, user.password);
        if(!passwordMath){
            throw new Error("sssUsuário e Senha inválidos")
        }

        //gerar o token JWT e dados do Usuário
        const token = sign(
            {
                name: user.name,
                email: user.email,                
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFyaWFzaWx2YSIsImVtYWlsIjoibWFyaWFzaWx2YUBnbWFpbC5jb20iLCJpYXQiOjE2NDgzMTI4NDYsImV4cCI6MTY1MDkwNDg0Niwic3ViIjoiMjU5MmUwM2YtODg0MS00ZTkyLThmNWMtNTJiN2E5ZGMwOWE5In0.EWXHijL1TLkG3xYoSD12CGlUHRIiYv_xmUsYu5P3ogU

        return { id: user.id, name:user.name, email:user.email, token: token }
    }
}

export { AuthUserService }