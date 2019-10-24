import * as dotEnv from 'dotenv';

dotEnv.config();

const config = {
    PORT: Number(process.env.PORT),
    NODE_ENV: String(process.env.NODE_ENV),
    SECRET: String(process.env.SECRET)
}

export let configEnv = Object.freeze(config);