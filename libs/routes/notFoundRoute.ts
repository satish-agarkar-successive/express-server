import { Request, Response, NextFunction } from 'express';

export const notfount_middleware = function (req: Request, res: Response, next: NextFunction) {
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }
    next();
};
