import * as dotEnv from 'dotenv';

dotEnv.config();

const config = {
    NODE_ENV: String(process.env.NODE_ENV),
    PORT: Number(process.env.PORT),
    SECRET: String(process.env.SECRET),
};

export let configEnv = Object.freeze(config);