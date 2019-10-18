import {Request, Response, NextFunction} from 'express';

let date_ob = new Date();

export var error_middleware =function(rreq : Request , res: Response,next: NextFunction)
{
    error: "Not Found";
    message: "error";
    status: 500;
    timestamp: date_ob;
    
    next();
}

