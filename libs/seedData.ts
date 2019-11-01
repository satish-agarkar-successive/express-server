import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { configEnv } from '../src/config/configuration';
import UserSchema from '../src/repositories/user/UserSchema';

export default async () => {

    const seedData = [
        {
            sub: 'Learn and Implement',
            name: 'Trainee',
            email: 'trainee@successive.tech',
            role: 'trainee',
            password: await bcrypt.hash('successive1', configEnv.SALT),
        },
        {
            sub: 'Learn and Implement',
            name: 'Head Trainer',
            email: 'head.trainer@successive.tech',
            role: 'head-trainer',
            password: await bcrypt.hash('successive2', configEnv.SALT),
        },
        {
            sub: 'Test Database',
            name: 'Satish Agarkar',
            email: 'sragarkar27@gmail.com',
            role: 'head-trainer',
            password: await bcrypt.hash('satish1', configEnv.SALT),
        },
    ];
    UserSchema.countDocuments('', (err: any, count: any) => {
        console.log('Seeding Data ....');
        if (count === 0) {
            UserSchema.insertMany(seedData).then((users: any) => {
                console.log('data seeded');
            // tslint:disable-next-line: no-shadowed-variable
            }).catch((err: any) => {
                console.log(err);
            });
        }
        if (err) {
            console.log(err);
        }
        UserSchema.findOne().then((user: any) => {
            const data = {_id : user._id as any, email: user.email as any};
            const token = jwt.sign(data, process.env.SECRET as jwt.Secret, { expiresIn: '15m' });
            console.log(token);
        // tslint:disable-next-line: no-shadowed-variable
        }).catch(err => {
            console.log(err);
        });
        console.log('Already data is seeded');
    });
};
