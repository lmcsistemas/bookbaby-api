import { Request, Response } from 'express';

import { DetailAgendaService } from '../../services/Agenda/DetailAgendaService'

class DetailAgendaController{
    async handle(req, res){

        const {id} = req.body;

        console.log('criancaid', id);

        const detailAgendaService = new DetailAgendaService();
        const agenda = await detailAgendaService.execute(id);

        return res.json(agenda)

    }
}

export { DetailAgendaController }