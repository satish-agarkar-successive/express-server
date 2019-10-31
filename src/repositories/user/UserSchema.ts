import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    name: String,
    password: String,
    role: String,
    sub: String,
}, { timestamps: true });

export default mongoose.model('User', UserSchema);