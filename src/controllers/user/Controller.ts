import * as express from 'express';

class Controller {
    public create = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Create and Save Rout for users',
            body: req.body,
        });
    };

    public findAll = (req : express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Retrieve and return all users from the database',
            params: req.query,
        });
    };

    public findone = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Find a single note with a user id',
            params: req.query,
        });
    };

    public update = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Update a note identified by the user id in the request',
            body: req.body,
        });
    };

    public delete = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Delete a note with the specified user id in the request',
            param: req.params,
        });
    };
    public getTokenUser(req: any, res: express.Response, next: express.NextFunction) {
        res.status(200).json({
            userData: req.userData,
        });
    };
}

export const controller = new Controller();