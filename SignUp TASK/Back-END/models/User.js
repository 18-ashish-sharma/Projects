const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    
    lastName: {
        type: String
    },
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
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