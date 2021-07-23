const mongoose = require('mongoose')
require('mongoose-type-email')

const UserSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    email: {
        type:mongoose.SchemaTypes.Email,
        required:true
    },
    password: {
        type:String,
        required:true
    }, 
    image:{
        type:String
    }
})

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel