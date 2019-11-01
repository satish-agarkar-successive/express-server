import { Request, Response, NextFunction } from 'express';

export const notfount_middleware = function (req: Request, res: Response, next: NextFunction) {
    const error = {
        error: 'Not found',
        msg: 'error',
        status: '404' ,
        timestamp: new Date(),
    };
    res.send(error);
};
