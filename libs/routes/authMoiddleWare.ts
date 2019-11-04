import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import { decode } from 'punycode';
import { hasPermission } from '../../extraTs/Utils/Permission/permissions';

export const authMiddleWare = (moduleName: string, permissionType: string) =>
async (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization.split(' ')[1];
  await jwt.verify(token, process.env.SECRET as jwt.Secret, async (err: Error, decoded: any) => {
    if (err) {
      res.status(401).json({
        msg: 'Unauthorized Access',
      });
    }
    console.log(!hasPermission(moduleName, decoded.role, permissionType));
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
