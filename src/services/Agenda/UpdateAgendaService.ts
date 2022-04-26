import prismaClient from "../../prisma";

interface AgendaRequest{
    almoco:string,
    janta:string,
    lanche:string,
    informacoes:string,
    precisa:string,
    agendaId:string
}

class UpdateAgendaService{
    async execute({almoco,janta,lanche,informacoes,precisa,agendaId}: AgendaRequest){

        console.log('update agenda', {almoco,janta,lanche,informacoes,precisa,agendaId});

        const agenda = prismaClient.agenda.update({
            where:{
                id:agendaId
            },
            data:{almoco,janta,lanche,informacoes,precisa},
            select:{almoco:true,janta:true,lanche:true,informacoes:true,precisa:true,id:true}            
        });

        return agenda;
    }
}

export { UpdateAgendaService }