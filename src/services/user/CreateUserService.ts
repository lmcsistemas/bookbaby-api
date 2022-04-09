import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';


interface UserRequest{
    name:string;
    email:string;
    password:string
}

class CreateUserService{
    async execute({name, email, password}:UserRequest){

        console.log(name, email, password)

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
            },
            select:{
                id:true,
                email:true, 
                name:true,                
            }
        })


        return user
    }
}

export { CreateUserService }