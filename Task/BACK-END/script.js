const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/user')
const DataModel  = require('./models/Data')
const dataToUpload = require('./data.json') 
app.use(express.json())

// const multer = require('multer')

// const upload = multer({
//     storage:multer.diskStorage,
//     fileFilter:function(req, file, callback) {
//         var ext = path.extname(file.originalname)
//         callback(null, true)
//     }
// })
// .single('image')

// const upload = ()

const cloudinary = require('cloudinary').v2
let loggeduser = {}
app.use(express.urlencoded({ extended: true }))
mongoose.connect('mongodb+srv://owner:123@companydatabase.rcplm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}, async (err) => {
    if (err) throw err
    console.log('Connected')
})

// ndjnnon@123.com
const cors = require('cors')
const { diskStorage } = require('multer')
app.use(
    cors({
        origin:'http://localhost:3000'
    })
)

cloudinary.config({
    cloud_name:'ash006',
    api_key:'813284921423796',
    api_secret:'iKJQb914t5mlKdK50EMko3TiNpw'
})

app.post("/signup", async (req, res) => {
    try {
        const old = await UserModel.findOne({email:req.body.email})
        if (old != null) {
            res.json({error:"User already exists"})
            return
        } else {
            const data = await UserModel.create(req.body)
            await data.save()
            console.log(old != null)
            loggeduser = data
        }
        res.status(200).json({
            loggeduser,
            message:'New user created',
            error:""
        })
    } catch(error) {
        res.json({error:"Error occured at backend"})
    }
})

app.post('/login', async (req, res) => {
    const user = await UserModel.findOne({email:req.body.email}) 
    if (user != null ) {
        if (user.password == req.body.password) {
            loggeduser = user
            res.json(user)
            return
        }
        res.json({error:"Wrong password"}) 
        return
    }
    res.json({error:"User not present"})
})

app.post("/user", async (req, res) => {
    res.json(loggeduser)
})


// app.post("/image", upload,(req, res) => {
//     console.log(req.image)
//     res.json(req.file)
//     // cloudinary.uploader.upload(req.file)
// })


app.post('/data', async (req, res) => {
    try {
        
        DataModel.insertMany(dataToUpload)
        console.log('data saved')
        res.send('SAVED')

    } catch (error) {
        console.log(error)
    }
})

app.get('/allData' , async (req, res) => {

    try {
        
        const foundData = await DataModel.find({})
        res.send(foundData)

    } catch (error) {
        console.log(error)
    }
})

app.listen(5000)