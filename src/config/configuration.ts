import * as dotEnv from 'dotenv';
import { IConfig } from './IConfig';

dotEnv.config();

const config = {
    NODE_ENV: String(process.env.NODE_ENV),
    PORT: Number(process.env.PORT),
    SECRET: String(process.env.SECRET),
    SALT: Number(process.env.SALT),
    MONGO_URL: String(process.env.MONGO_URL),
};

export let configEnv = Object.freeze(config);
