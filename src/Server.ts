import * as express from 'express';

import { notfount_middleware } from './../libs/routes/notFoundRoute';

import { error_middleware } from './../libs/routes/errorHandler';

import { IConfig } from './config/IConfig';

import router from './router';

import bodyParser = require('body-parser');

import { Database } from '../libs/Database';

export class Server {
    database = new Database;
    public app: any;
    public PORT: number;
    public dbConnectionString: string;
    public NODE_ENV: String;
    constructor(config: IConfig) {

        this.app = express();
        this.PORT = config.PORT;
        this.PORT = config.PORT || 9000;
        this.NODE_ENV = config.NODE_ENV;
        this.dbConnectionString = String(config.MONGO_URL);
    }

    public bootstrap() {
        this.run();
        this.initBodyParser();

        this.app.get('/health-check', (req: express.Request, res: express.Response) => {
            res.status(200).json({
                msg: 'I am OK',
            });
            this.app.use(notfount_middleware);
            this.app.use(error_middleware);

        });
        this.app.use('/api', router);
        this.app.use(notfount_middleware);
        this.app.use(error_middleware);
    }
    public async run() {

        let isConnected = await this.database.open(this.dbConnectionString);
        try {
            this.app.listen(this.PORT, () => {
                console.log(`server is up and listening on ${this.PORT}`);
            });
        } catch (error) {
            console.log(error);
        }
    }
    private initBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(bodyParser.json());
    }
}
// module.exports = router;

