import { Request, Response } from 'express';
import { ListAgendaByChildService } from '../../services/Agenda/ListAgendaByChildService';

class ListAgendaByChildController{
    async handle(req, res){

        const { criancaId, userId, dataInicio, dataFim } = req.query; 

        console.log('userID', userId)
        console.log('criancaId', criancaId)
        console.log('baody', req.query)        

        const listAgendaByChildService = new ListAgendaByChildService();
        const listaAgenda = await listAgendaByChildService.execute({ criancaId, userId, dataInicio, dataFim });

        res.json(listaAgenda);
    }
}

export { ListAgendaByChildController }  