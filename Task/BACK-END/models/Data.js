const mongoose = require('mongoose')


const DataSchema = new mongoose.Schema({

    userId : {
        type : Number,
        required : true
    },

    id : {
        type : Number,
        required : true
    },

    title: {
        type : String,
        required : true
    },

    body: {
        type : String,
        required : true
    }
})

const DataModel = mongoose.model('Data', DataSchema)
module.exports = DataModel