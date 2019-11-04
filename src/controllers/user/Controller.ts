import * as express from 'express';

class Controller {
    public create = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Create and Save Rout for users',
        });
    };

    public findAll = (req : express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Retrieve and return all users from the database',
        });
    };

    public findone = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Find a single note with a user id',
        });
    };

    public update = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Update a note identified by the user id in the request',
        });
    };

    public delete = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Delete a note with the specified user id in the request',
        });
    };
}

export const controller = new Controller();