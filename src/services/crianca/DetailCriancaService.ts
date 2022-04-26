import prismaClient from "../../prisma";

class DetailCriancaService{
    async execute(cpf:string, criancaId:string){

        const crianca = await prismaClient.crianca.findFirst({
            where:{
                OR:[
                    {id:criancaId},
                    {cpf:cpf},                    
                ]                
            }
            
        })

        return crianca
    }
}

export {DetailCriancaService}