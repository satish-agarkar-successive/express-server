import * as dotEnv from 'dotenv';

dotEnv.config();

const config = {
    NODE_ENV: String(process.env.NODE_ENV),
    PORT: Number(process.env.PORT),
    SECRET: String(process.env.SECRET),
    MONGO_URL: String(process.env.MONGO_URL),
};

export let configEnv = Object.freeze(config);
