const mongoose = require('mongoose')
const dotenv  = require('dotenv') ;
dotenv.config()

const URL = process.env.MONGO_URL

const ConnectDB = mongoose.connect(URL , {
    useUnifiedTopology : true, 
            useNewUrlParser : true , 
            useCreateIndex : true ,
},err => {
    if(err){
        console.log("error in db connection", err)
    }else {
        console.log("Database connected")
    }
})

