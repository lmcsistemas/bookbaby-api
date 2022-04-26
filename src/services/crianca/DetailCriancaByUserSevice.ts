import prismaClient from "../../prisma";

class DetailCriancaByUserService{
    async execute(user_id:string, cpf:string, name:string){

        if(cpf != undefined ){
            user_id = undefined;
        }

        if(name != undefined ){
            user_id = undefined;
        }

        const criancabyuser = await prismaClient.userCrianca.findMany({
            where:{
                OR:[
                    {userId:user_id},
                    {
                        crianca:{
                            OR:[
                                {
                                    name:{
                                        contains: name,
                                        mode: 'insensitive'
                                    },
                                    cpf:cpf
                                }
                            ],
                            
                        }
                    },
                ],
                
            },            
            select:{
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
