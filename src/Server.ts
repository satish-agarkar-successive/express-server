import * as express from 'express';

import { notfount_middleware } from './../libs/routes/notFoundRoute';
import { error_middleware } from './../libs/routes/errorHandler';

import { IConfig } from './config/IConfig';

import router from './router'

var bodyParser = require('body-parser');

export class Server {
    public app: any;
    public PORT: number;
    constructor(config: IConfig) {
        this.app = express();
        this.PORT = config.PORT;
    }

    bootstrap() {
        this.run();
        this.setupRoutes();
        this.initBodyParser();



        this.app.get('/health-check', (req: express.Request, res: express.Response) => {
            res.status(200).json({
                msg: 'I am OK'
            });
            this.app.use(notfount_middleware);
            this.app.use(error_middleware)

        });
        this.app.use('/api', router);
        this.app.use(notfount_middleware);
        this.app.use(error_middleware)
    }
    run() {
        try {
            this.app.listen(this.PORT, () => {
                console.log(`server is up and listening on ${this.PORT}`);
            })
        } catch (error) {
            console.log(error);
        }
    }
    setupRoutes() {


    }
    private initBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(bodyParser.json());
    }
}
// module.exports = router;
