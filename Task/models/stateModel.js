const mongoose = require('mongoose')

const stateModel = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true, 
        ref : 'User'
    },

    stateName : {
        type : String ,
        required : true,
        unique : true
    }
},
   {
    timestamps : true
   }
)

const State = mongoose.model('State' , stateModel)

module.exports = State

