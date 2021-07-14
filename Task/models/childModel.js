const mongoose = require('mongoose');


const childSchema = new mongoose.Schema({
    childName : {
        type : String,
        required : true
    },
    sex : {
        type : String,
        required : true
    },

    dateofbirth : {
        type : String,
        required : true 
    },
    fatherName : {
        type : String,
        required : true
    },
    motherName : {
        type : String,
        required : true
    },

    // state_id : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     required : true, 
    //     ref : 'State'
    // },

    // district_id : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     required : true,
    //     ref : 'City'
    // },

    userName : {
        type : String,
        required : true
    },

    stateName :{
        type : String,
        required: true
    },
    districtName : {
        type : String,
        required: true
    }
},
{
    timestamps : true
})

const Child = mongoose.model('Child', childSchema)

module.exports = Child