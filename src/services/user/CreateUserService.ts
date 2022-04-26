import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest{
    name:string;
    email:string;
    password:string;
    cpf:string;
    nivel:string
}

class CreateUserService{
    async execute({name, email, password,cpf, nivel}:UserRequest){

        console.log(name, email, password, cpf, nivel)

        //verificar o email
        if(!email){
            throw new Error("Informe o email");
        }

        //verifica se jah tem cadastro para esse email.
        const userAlready = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(userAlready){
            throw new Error('Usuário já cadastrado');
        }

        const passwordHash = await hash(password, 8);
        console.log('passhash', passwordHash)
        const user = await prismaClient.user.create({
            data:{
                name:name,
                email:email,
                password:passwordHash,
                cpf:cpf,
                nivel:nivel
            },
            select:{
                id:true,
                email:true, 
                name:true, 
                cpf:true,
                nivel:true,
            }
        })
        return user
    }
}

export { CreateUserService }