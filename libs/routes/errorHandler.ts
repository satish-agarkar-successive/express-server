import { Request, Response, NextFunction } from 'express';

let dateOb = new Date();

export const error_middleware = (req: Request, res: Response, next: NextFunction) => {

    if (req.accepts('json')) {

        res.send({
            error: 'Not Found',
            message: 'error',
            status: 500,
            timestamp: dateOb,
        });
    }
    next();
};

