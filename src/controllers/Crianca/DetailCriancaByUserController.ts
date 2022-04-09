import { Request, Response } from 'express';

import { DetailCriancaByUserService } from '../../services/crianca/DetailCriancaByUserSevice';

class DetailCriancaByUserController{
    async handle(req, res){

        const user_id = req.user_id;
        const detailCriancaByUserService = new DetailCriancaByUserService();
        const ret_detailCriancaByUserService = await detailCriancaByUserService.execute(user_id);

        return res.json(ret_detailCriancaByUserService);
    }
}

export { DetailCriancaByUserController }