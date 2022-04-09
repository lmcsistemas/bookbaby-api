import prismaClient from "../../prisma";

class DetailCriancaByUserService{
    async execute(user_id:string){

        const criancabyuser = await prismaClient.userCrianca.findMany({
            where:{
                userId:user_id
            },            
            include:{
                crianca:{
                    select:{
                        id:true,
                        name:true,
                        cpf: true,
                        dtnascimento: true
                    }
                }
            },            
        })

        return criancabyuser;

    }

}


export { DetailCriancaByUserService }
