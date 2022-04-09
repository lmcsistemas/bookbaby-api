import prismaClient from "../../prisma";


class DetailAgendaService{
    async execute(id:string){

        const agendas = prismaClient.agenda.findMany({
            where:{
                id:id
            }
        })

        return agendas;
    }
}

export { DetailAgendaService }