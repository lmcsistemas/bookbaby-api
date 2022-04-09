import prismaClient from "../../prisma";

class DetailCriancaService{
    async execute(cpf:string){

        const crianca = await prismaClient.crianca.findFirst({
            where:{
                cpf:cpf
            }
        })

        return crianca
    }
}

export {DetailCriancaService}