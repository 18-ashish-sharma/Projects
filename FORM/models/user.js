const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required:true
    },

    email: {
        type: String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const UserModel = mongoose.model('customercredential', UserSchema)



module.exports = {
    UserModel
}