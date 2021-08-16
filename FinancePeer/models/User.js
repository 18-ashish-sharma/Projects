const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passcode: {
        type: String,
        required: true
    },
    files: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'File'
        }
    ],
    photo: {
        type: String,
        required: true,
        default: "https://res.cloudinary.com/dil2kbrm4/image/upload/v1629119783/IMG_20210715_063944_277_jefwqy.jpg"
    },
})

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel