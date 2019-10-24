import { Router } from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { controller } from './Controller';

import api_Check from '../../middleware/api-config';

import { authMiddleWare } from '../../../libs/routes/authMoiddleWare';

const traineeRouter = Router();

traineeRouter.get('/findAll', authMiddleWare('getUsers', 'read'),
checkSchema(api_Check.get as any), controller.findAll);

traineeRouter.post('/create', authMiddleWare('postUsers', 'write'),
checkSchema(api_Check.create as any), controller.create);

traineeRouter.get('/findone/:noteId', authMiddleWare('getUsers', 'read'),
checkSchema(api_Check.get as any), controller.findone);

traineeRouter.put('/update/:noteId', authMiddleWare('updateUsers', 'update'),
checkSchema(api_Check.update as any), controller.update);

traineeRouter.delete('/delete/:noteId', authMiddleWare('deleteUsers', 'delete'),
checkSchema(api_Check.delete as any), controller.delete);

export default traineeRouter;
