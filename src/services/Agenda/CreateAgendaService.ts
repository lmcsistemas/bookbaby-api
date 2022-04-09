import prismaClient from "../../prisma";

interface AgendaRequest{
    almoco:string,
    janta:string,
    lanche:string,
    informacoes:string,
    precisa:string,
    criancaId:string
}


class CreateAgendaService{
    async execute({almoco,janta,lanche,informacoes,precisa,criancaId}: AgendaRequest){

        console.log('dnetro do service', {almoco,janta,lanche,informacoes,precisa,criancaId});

        const agenda = prismaClient.agenda.create({
            data:{almoco,janta,lanche,informacoes,precisa,criancaId},
            select:{almoco:true,janta:true,lanche:true,informacoes:true,precisa:true,criancaId:true}            
        });

        return agenda;
    }
}

export { CreateAgendaService }