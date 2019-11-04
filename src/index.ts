import {configEnv} from './config/configuration';

import {Server} from './Server';

const server = new Server(configEnv)

server.bootstrap();
