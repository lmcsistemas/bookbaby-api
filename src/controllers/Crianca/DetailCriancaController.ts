import {Request, Response} from 'express';
import { DetailCriancaService } from '../../services/crianca/DetailCriancaService'

class DetailCriancaController{
    async handle(req, res){
        const {cpf} = req.query;

        console.log('cpf', cpf);
        const detailCriancaService = new DetailCriancaService();
        const crianca = await detailCriancaService.execute(cpf);

        return res.json(crianca);

    }
}


export {DetailCriancaController}