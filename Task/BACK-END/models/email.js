const mongoose = require('mongoose')
require('mongoose-type-email')

const EmailSchema = new mongoose.Schema({
    email:{
        type:mongoose.SchemaTypes.Email,
        required:true
    }
})

const EmailModel = mongoose.model('Email', EmailSchema)
module.exports = EmailModel