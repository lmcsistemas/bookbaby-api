import {Request, Response} from 'express';
import { UpdateCriancaService } from '../../services/crianca/UpdateCriancaService';

class UpdateCriancaController{
    async handle(req: Request, res: Response){

        const {id, name, cpf, dtnascimento} = req.body;
        const user_id = req.user_id;

        const updateCriancaService = new UpdateCriancaService();
        const crianca = await updateCriancaService.execute({id, name, cpf, dtnascimento});

        return res.json(crianca)

    }
}

export { UpdateCriancaController }