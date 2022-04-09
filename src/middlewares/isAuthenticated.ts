import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload{
    sub:string;
}

export function isAuthenticated(
    req:Request,
    res:Response,    
    next: NextFunction
){
    console.log('pasosu no middleware');

    //receber o token

    const authToken = req.headers.authorization;
    if(!authToken){
        return res.status(401).end();
    }


    console.log(authToken);

    const [, token] = authToken.split(" ");

    console.log(token)

    try{
        //validar o token
        const {sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        console.log('sub ',sub);

        req.user_id = sub;
        return next();

    }
    catch(err){
        return res.status(401).end();
    }



    return next();
}