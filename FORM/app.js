require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const generateMail = require('./public/mailgenration.js')
const port = process.env.PORT  || 3000;
const { DATABASE } = process.env
const { UserModel } = require('./models/user')
const exphbs  = require('express-handlebars');


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

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('form')
})


app.get('/all', async (req, res) => {
    try{
    const data = await UserModel.find({})
    res.render('profile2', {data})
    // console.log(data)
    }catch(err){
        res.send(err)
    }
})

app.post('/post', async (req, res)=> {
    console.log(req.body)
    const { name, dob, email, phone } = req.body
    const data = {
        name,
        dob,
        email,
        phone
    }
    
    try {

        const newUserDoc = new UserModel(data)

        const savedUserDoc = await newUserDoc.save()

        generateMail.generateMail(email, name, `Hello ${name}. Your Form has been submitted
        Regards:
        Ashish Sharma
        `)
        console.log('saved')
        res.redirect("/all")

    } catch (error) {
        console.log(error)
        res.send(`Internal Error Occurred: ${error._message}`)
    }
})

app.listen(port, ()=> console.log('Server Started'))