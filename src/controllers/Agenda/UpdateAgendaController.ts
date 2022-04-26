import { Request, Response } from 'express';
import { UpdateAgendaService } from '../../services/Agenda/UpdateAgendaService';

class UpdateAgendaController{
    async handle(req, res){

        const {almoco,janta,lanche,informacoes,precisa,agendaId} = req.body;

        if(!agendaId){
            throw new Error("Informe a agenda");
        }
        const updateAgendaService = new UpdateAgendaService();
        const agenda = await updateAgendaService.execute({almoco,janta,lanche,informacoes,precisa,agendaId});

        return res.json(agenda)

    }
}

export { UpdateAgendaController }