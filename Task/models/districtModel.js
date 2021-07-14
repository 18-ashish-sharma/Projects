const mongoose = require('mongoose');


const districtSchema = new mongoose.Schema({
    
  
    state_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true, 
        ref : 'State'
    },

    districtName : {
        type : String,
        required : true
    }
},
{
    timestamps : true
})

var District = mongoose.model( 'District' , districtSchema)

module.exports = District