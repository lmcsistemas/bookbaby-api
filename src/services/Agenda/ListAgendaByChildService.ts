import prismaClient from "../../prisma";

type PropsAgenda = { 
    criancaId: string, 
    userId: string,
    dataInicio?: string,
    dataFim?:string
}

class ListAgendaByChildService{
    async execute({ criancaId, userId, dataInicio, dataFim }:PropsAgenda){
        console.log('SERViCE userID', userId)
        console.log('SERViCE criancaId', criancaId) 
        console.log('SERViCE userID', dataInicio)
        console.log('SERViCE userID', dataFim)

        let cond_var = { }

        if(dataInicio != undefined && dataFim != undefined){
            console.log('passou aqui');

            const gt = dataInicio+'T00:00:00.000Z';
            const lt = dataFim+'T23:59:59.444Z';

            cond_var = {
                where:{
                    created_at: {                
                        gt: gt,
                        lt: lt
                    },
                },
                select:{
                    crianca:{
                        select:{
                            name:true,
                            id:true,
                            agendas:{
                                orderBy:{
                                    created_at:'desc'
                                },
                                select:{
                                    id:true,
                                    informacoes:true,
                                    precisa:true,
                                    janta:true,
                                    almoco:true,
                                    lanche:true,
                                    created_at:true,
                                }
                            }
                        }
                    }
                } 
                    
            }
        }else if(userId == undefined && criancaId == undefined){
            cond_var = {
                select:{
                    crianca:{
                        select:{
                            name:true,
                            id:true,
                            agendas:{    
                                take:5, 
                                orderBy:{
                                    created_at:'desc'
                                },                           
                                select:{
                                    id:true,
                                    informacoes:true,
                                    precisa:true,
                                    janta:true,
                                    almoco:true,
                                    lanche:true,
                                    created_at:true,
                                }
                            }
                        }
                    }
                } 
            }            
        }else{  
            cond_var = {                
                where:{
                    OR: [
                        {userId: userId},
                        {criancaId: criancaId}  
                    ]        
                },          
                select:{
                    crianca:{
                        select:{
                            name:true,
                            id:true,
                            agendas:{
                                orderBy:{
                                    created_at:'desc'
                                },                                
                                select:{
                                    id:true,
                                    informacoes:true,
                                    precisa:true,
                                    janta:true,
                                    almoco:true,
                                    lanche:true,
                                    created_at:true,
                                }
                            }
                        }
                    }
                } 
            }
        }

        console.log("cond var", cond_var);

        const agendas = prismaClient.userCrianca.findMany(cond_var)

        console.log('agendas', agendas)

        if((await agendas).length == 0){
            throw new Error("Nenhuma agenda encontrada")
        }

        return agendas;
    }
}

export { ListAgendaByChildService }