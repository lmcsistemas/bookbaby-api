import prismaClient from "../../prisma";

interface CriancaUpdateRequest{
    id: string, name: string, cpf: string, dtnascimento: string
}

class UpdateCriancaService{
    async execute({id, name, cpf, dtnascimento}:CriancaUpdateRequest){

        if(!id){
            throw new Error('Informe a criança a ser alterada.');
        }

        if(!name || !cpf || !dtnascimento){
            throw new Error('Informe o nome, CPF e Data de Nascimento');
        }

        const crianca = await prismaClient.crianca.update({
            data:{name, cpf, dtnascimento},
            where:{id:id}
        })

        return crianca
    }
}

export { UpdateCriancaService }