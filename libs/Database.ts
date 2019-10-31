import * as mongoose from 'mongoose';
import seedData from './seedData';

export class Database {
    public open(dbConnectionString: string) {
        
        return new Promise((resolve, reject) => {
            mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
            mongoose.connection.on('error', (error) => {
                reject(error)
            })
            mongoose.connection.on('connected', (connected) => {
                seedData();
                resolve(true);
            })
        })
    }

    public disconnect() {
        mongoose.disconnect();
    }
}