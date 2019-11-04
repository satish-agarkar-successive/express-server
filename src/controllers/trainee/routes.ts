import { controller } from './Controller';
import {Router} from 'express';

const traineeRouter = Router();

    traineeRouter.get('/findAll', controller.findAll);
    
    traineeRouter.post('/create', controller.create);

    traineeRouter.get('/findone/:noteId', controller.findone);

    traineeRouter.put('/update/:noteId', controller.update);

    traineeRouter.delete('/delete/:noteId', controller.delete);

export default traineeRouter;