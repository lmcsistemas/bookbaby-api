import prismaClient from "../../prisma";

class CreateUserCriancaService{
    async execute(id:string, user_id:string){

        console.log('id_crianca', id)
        console.log('id_user', user_id)

        const userCrianca = await prismaClient.userCrianca.create({
            data:{criancaId:id, userId:user_id},
        });
        return userCrianca; 
    }
}

export { CreateUserCriancaService }