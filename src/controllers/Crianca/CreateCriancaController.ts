import {Request, Response} from 'express'
import { CreateCriancaService } from '../../services/crianca/CreateCriancaService'

class CreateCriancaController{
    async handle(req: Request, res: Response){
        const {name, cpf, dtnascimento} = req.body;
        const user_id = req.user_id;

        const createCriancaService = new CreateCriancaService();
        const crianca = await createCriancaService.execute({name, cpf, dtnascimento, user_id});

        return res.json(crianca)
    }
}

export {CreateCriancaController}
