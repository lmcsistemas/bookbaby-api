import { Request, Response } from 'express';
import { CreateAgendaService } from '../../services/Agenda/CreateAgendaService';

class CreateAgendaController{
    async handle(req, res){

        const {almoco,janta,lanche,informacoes,precisa,criancaId} = req.body;

        if(!criancaId){
            throw new Error("Informe a crianca");
        }

        const createAgendaService = new CreateAgendaService();
        const agenda = await createAgendaService.execute({almoco,janta,lanche,informacoes,precisa,criancaId});

        return res.json(agenda)

    }
}

export { CreateAgendaController }