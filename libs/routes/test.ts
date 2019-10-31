 
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import checkPermisson from '../../../extraTs/utils/permission';
import UserSchema from '../../repositories/user/UserSchema';

const check = new checkPermisson();

// tslint:disable-next-line: max-line-length
export const authMiddleWare = (moduleName: string, permissionType: string) => async (req: any, res: express.Response, next: express.NextFunction) => {
    const token = req.headers.authorization.split(' ')[1];
    await jwt.verify(token, process.env.SECRET as jwt.Secret, async (err: Error, decoded: any) => {
        req.userData = decoded;
        const { _id } = decoded;
        await UserSchema.findOne({ _id: mongoose.Types.ObjectId(_id) }).then((data: any) => {
            if (data === null) {
                res.status(404).json({
                    msg: 'User not found in the system',
                });
            }
            req.userData.role = data.role;
        }).catch(err => {
            console.log(err);
        });
        if (err) {
            res.status(401).json({
                msg: 'Unauthorized Access',
            });
        }
        if (!check.hasPermission(moduleName, req.userData.role, permissionType)) {
            res.status(401).json({
                msg: 'Unauthorized Access',
            });
        }
        next();
    });
};