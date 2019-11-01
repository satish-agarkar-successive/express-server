import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import UserSchema from '../../../src/repositories/user/UserSchema';

class Controller {
    public create = (req: any, res: Response, next: NextFunction) => {
        res.status(200).json({
            body: req.userData,
            msg: 'Create and Save a new trainee',
        });
    };

    public findAll = (req: any, res: Response, next: NextFunction) => {
        res.status(200).json({
            msg: 'Retrieve and return all trainee from the database',
            params: req.userData,

        });
    };

    public findone = (req: any, res: Response, next: NextFunction) => {
        res.status(200).json({
            body: req.userData,
            msg: 'Find a single note with a trainee id' + req.params.noteId,
        });
    };

    public update = (req: any, res: Response, next: NextFunction) => {
        res.status(200).json({
            body: req.userData,
            msg: 'Update a note identified by the trainee is in the request',
        });
    };
    public delete = (req: any, res: Response, next: NextFunction) => {
        if (req.userData._id == req.params.noteId) {
            res.status(200).json({
                msg: 'Delete a note with the specified trainee id in the request ' + req.params.noteId,
                param: req.userData,
            });
        } else {
            res.status(200).json({
                msg: 'user not found ' + req.params.noteId,
                param: req.userData,
            });
        }
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
}

}

export const controller = new Controller();
