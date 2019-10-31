import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';

import { hasPermission } from '../../extraTs/Utils/Permission/permissions';
import UserSchema from '../../src/repositories/user/UserSchema';

export const authMiddleWare = (moduleName: string, permissionType: string) =>
  async (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization.split(' ')[1];
    await jwt.verify(token, process.env.SECRET as jwt.Secret, async (err: Error, decoded: any) => {

      req.userData = decoded;
      const { _id } = decoded;
      // console.log("Scema data" + UserSchema +" scema");
      await UserSchema.findOne({ _id: mongoose.Types.ObjectId(_id) }).then((data: any) => {
        console.log(data);
        if (data === null) {
          res.status(404).json({
            msg: 'User not found in the system',

          });
        }

        req.userData.role = data.role;
      }).catch((err: any) => {
        console.log(err);
      });

      if (err) {
        res.status(401).json({
          msg: 'Unauthorized Access',
        });
      }

      // console.log(moduleName, decoded.role, permissionType);
      if (!hasPermission(moduleName, decoded.role, permissionType)) {
        console.log(moduleName, decoded.role, permissionType);
        res.status(401).json({
          msg: 'Unauthorized Access',
        });
      } else {
        res.status(200).json({
          msg: 'success',
          userdata: decoded,
        });
      }
    });
  };
