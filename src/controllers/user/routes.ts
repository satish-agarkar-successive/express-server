import { Router } from 'express';
import { controller } from './Controller';

const userRouter = Router();

userRouter.get('/findAll', controller.findAll);

userRouter.post('/create', controller.create);

userRouter.get('/findone/:noteId', controller.findone);

userRouter.put('/update/:noteId', controller.update);

userRouter.delete('/delete/:noteId', controller.delete);

export default userRouter;
