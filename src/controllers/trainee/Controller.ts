import * as express from 'express';

class Controller {
    create = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Create and Save a new trainee'
        });
    };

    findAll = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Retrieve and return all trainee from the database'
        });
    };


    findone = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Find a single note with a trainee id'
        });
    };


    update = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Update a note identified by the trainee is in the request'
        });
    };

    delete = (req: express.Request, res: express.Response) => {
        res.status(200).json({
            msg: 'Delete a note with the specified trainee id in the request'
        });
    };
}

export const controller = new Controller();