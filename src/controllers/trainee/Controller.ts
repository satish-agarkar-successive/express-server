import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import UserSchema from '../../../src/repositories/user/UserSchema';

class Controller {
    public create = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            body: req.body,
            msg: 'Create and Save a new trainee',
        });
    };

    public findAll = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            msg: 'Retrieve and return all trainee from the database',
            params: req.query,

        });
    };

    public findone = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            body: req.body,
            msg: 'Find a single note with a trainee id',
        });
    };

    public update = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            body: req.body,
            msg: 'Update a note identified by the trainee is in the request',
        });
    };
    public delete = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            msg: 'Delete a note with the specified trainee id in the request',
            param: req.params,
        });
    };
    public getTokenUser(req: any, res: Response, next: NextFunction) {
        UserSchema.findOne().then((user: any) => {

            const data = { _id: user._id as any, email: user.email as any };
            const tokenVal = jwt.sign(data, process.env.SECRET as jwt.Secret, { expiresIn: '1h' });
            res.status(200).json({
                token: tokenVal,

            });

        }).catch((err: any) => {
            console.log(err);
        });

    };

}

export const controller = new Controller();