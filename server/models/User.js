import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type:String,
        require: true,
        max: 50,
        unique: true,
    },
    password: {
        type:String,
        require: true,
        min: 6,
    },
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User;