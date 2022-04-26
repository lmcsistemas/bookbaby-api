import { Request, Response } from 'express';

import { DetailCriancaByUserService } from '../../services/crianca/DetailCriancaByUserSevice';

class DetailCriancaByUserController{
    async handle(req, res){

        const user_id = req.user_id;
        const {cpf} = req.query;
        const {name} = req.query;

        console.log('no controller cpf ', cpf)
        console.log('no controller name ', name)

        const detailCriancaByUserService = new DetailCriancaByUserService();
        const ret_detailCriancaByUserService = await detailCriancaByUserService.execute(user_id, cpf, name);

        return res.json(ret_detailCriancaByUserService);
    }
}

export { DetailCriancaByUserController }