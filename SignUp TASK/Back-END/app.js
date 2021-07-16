const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const auth = require('./auth')
const { UserModel } = require('./models/User')
const bcrypt = require("bcrypt")
const DATABASE = "mongodb+srv://owner:123@companydatabase.rcplm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

// mongoDb Database connect

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err
    console.log('MONGO DB DataBase Connected')
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.post('/signup', auth,  async (req, res) => {
    
    const {firstName, lastName, email, password} = req.body

    const hashedPassword = await bcrypt.hash((req.body).password, 10)
    signUpData = {
        firstName,
        lastName,
        email, 
        password: hashedPassword
    }

    try {

        const newUserDoc = new UserModel(signUpData)

        const savedUserDoc = await newUserDoc.save()
        
        console.log('SAVED')
        console.log(req.body)
        res.send('Saved')

    } catch (error) {
        console.log(error)
        console.log('ERROR')
        res.send(`Internal Error Occurred: ${error._message}`)
    }

})


app.post('/login', auth , async (req, res) => {
    const {email, password} = req.body
    
    
    try{

        const findUser = await UserModel.findOne({ email: email, password : password})
        res.send(findUser)

    }catch(error){
        console.log(error)
        console.log('ERROR')
        res.send(`Internal Error Occurred: ${error._message}`)
    }


})


app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started")
})