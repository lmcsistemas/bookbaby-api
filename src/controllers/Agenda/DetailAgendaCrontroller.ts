import { Request, Response } from 'express';

import { DetailAgendaService } from '../../services/Agenda/DetailAgendaService'

class DetailAgendaController{
    async handle(req, res){

        const {id} = req.query;
        console.log("query", req.query)

        console.log('id', id);

        const detailAgendaService = new DetailAgendaService();
        const agenda = await detailAgendaService.execute(id);

        return res.json(agenda)

    }
}

export { DetailAgendaController }