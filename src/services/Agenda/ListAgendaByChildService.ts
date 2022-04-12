import prismaClient from "../../prisma";


class ListAgendaByChildService{
    async execute(criancaId:string){

        const agendas = prismaClient.agenda.findMany({
            where:{
                criancaId:criancaId
            }
        })

        return agendas;
    }
}

export { ListAgendaByChildService }