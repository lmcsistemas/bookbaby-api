import { Request, Response } from 'express';
import { ListAgendaByChildService } from '../../services/Agenda/ListAgendaByChildService';

class ListAgendaByChildController{
    async handle(req, res){

        const { criancaId } = req.body; 

        const listAgendaByChildService = new ListAgendaByChildService();
        const listaAgenda = await listAgendaByChildService.execute(criancaId);

        res.json(listaAgenda);
    }
}

export { ListAgendaByChildController }  