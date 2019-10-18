import * as dotEnv from 'dotenv';

dotEnv.config();

const config = {
    PORT: Number(process.env.PORT),
    NODE_ENV: String(process.env.NODE_ENV)
}

export let configEnv = Object.freeze(config);