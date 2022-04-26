import {Request, Response} from 'express';
import { DetailCriancaService } from '../../services/crianca/DetailCriancaService'

class DetailCriancaController{
    async handle(req, res){
        const {cpf, criancaId} = req.query;

        console.log('cpf', cpf);
        console.log('criancaId', criancaId);
        const detailCriancaService = new DetailCriancaService();
        const crianca = await detailCriancaService.execute(cpf, criancaId);

        return res.json(crianca);

    }
}


export {DetailCriancaController}