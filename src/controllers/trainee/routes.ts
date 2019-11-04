import { controller } from './Controller';
import { Router } from 'express';

import { checkSchema, validationResult } from "express-validator";

import api_Check from '../../middleware/api-config';

const traineeRouter = Router();

traineeRouter.get('/findAll', checkSchema(api_Check.get as any), controller.findAll);

traineeRouter.post('/create', checkSchema(api_Check.create as any), controller.create);

traineeRouter.get('/findone/:noteId', checkSchema(api_Check.get as any), controller.findone);

traineeRouter.put('/update/:noteId', checkSchema(api_Check.update as any), controller.update);

traineeRouter.delete('/delete/:noteId', checkSchema(api_Check.delete as any), controller.delete);

export default traineeRouter;