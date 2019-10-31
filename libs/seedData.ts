import * as jwt from 'jsonwebtoken';
import UserSchema from '../src/repositories/user/UserSchema';

export default () => {

    const seedData = [
        {
            sub: "Learn and Implement",
            name: "Trainee",
            email: "trainee@successive.tech",
            role: "trainee",
            password: 'successive1',
        },
        {   
            sub: "Learn and Implement",
            name: "Head Trainer",
            email: "head.trainer@successive.tech",
            role: "head-trainer",
            password: 'successive2',
        },
        {
            sub: "Test Database",
            name: "Satish Agarkar",
            email: "sragarkar27@gmail.com",
            role: "head-trainer",
            password: 'successive2',
        },
    ];
    UserSchema.countDocuments('', (err: any, count: any) => {
        console.log('Seeding Data ....');
        if (count === 0) {
            UserSchema.insertMany(seedData).then((users: any) => {
                console.log("data seeded")
            }).catch((err: any) => {
                console.log(err);
            })
        }
        if (err) {
            console.log(err);
        }
        UserSchema.findOne().then((user: any) => {
            console.log(user._id);
            const data = {_id : user._id as any, email: user.email as any};
            console.log(data);
            const token = jwt.sign(data, process.env.SECRET as jwt.Secret, { expiresIn: '1h' });
            console.log(token);
        }).catch((err: any) => {
            console.log(err);
        });
        console.log('Already data is seeded');
    })
}