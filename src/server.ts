import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';

import cors from 'cors';

const app = express();

const port = process.env.PORT || 3333;
app.use(express.json());
app.use(cors())

app.use(router);

app.use((err: Error, req: Request, res: Response, next:NextFunction) => {
    if(err instanceof Error){
        //se for instancia de error
        return res.status(400).json({
            error:err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(port, () =>{ console.log(`servidor online on port ${port}!!!`) });