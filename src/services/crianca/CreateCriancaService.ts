import prismaClient from '../../prisma';

import { CreateUserCriancaService } from './CreateUserCriancaService';

interface CriancaRequest{
    cpf:string;
    name: string;
    dtnascimento:string;
    user_id:string;
}


class CreateCriancaService{
    async execute({cpf, name, dtnascimento, user_id}:CriancaRequest){
        if(!cpf){
            throw new Error("Informe o CPF da crianca");
        }
        const criancaExiste = await prismaClient.crianca.findFirst({
            where:{
                cpf:cpf
            }
        })
        if(criancaExiste){
            throw new Error('Usuário já cadastrado');
        }

        const crianca = await prismaClient.crianca.create({
            data:{cpf, name, dtnascimento},
            select:{
                id:true,
                cpf:true,
                name:true,
            }
        })

        const userCrianca = new CreateUserCriancaService();
        const userCria = await userCrianca.execute(crianca.id, user_id);

        return crianca
    }
}

export {CreateCriancaService}