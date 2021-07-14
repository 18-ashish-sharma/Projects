var Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userController = {
    
    register : async (req,res) => {
        try {

            const {username , email , password } = req.body;
            //check for email exists or not

            const user =  await Users.findOne({email : email })
            if(user) 
            return res.status(400).send("user exists")
            //hashing password
            const hashPassword = await bcrypt.hash(password , 8)
            const newUser = new Users({
                username : username,
                email : email ,
                password : hashPassword
            })
            await newUser.save()
            console.log("new user" , newUser)
            res.json({msg : "register successful"})
            
        } catch (error) {
            return res.status(500).json({msg : error.message})
        }
                
    } ,

    login : async (req , res) =>{

        try {

            const {email , password} = req.body

        const user =  await Users.findOne({email:email})

        if(!user) return res.status(400).json({msg:"user does not exists"})

        const ismatch =  await bcrypt.compare(password, user.password)
        if(!ismatch) return res.status(400).json({msg:"invalid password"})

        // if matched create token
        const userInfo = { id: user._id , name : user.name}
        const token = jwt.sign(userInfo , process.env.SECRET_KEY , {expiresIn : '1d'} )

        res.json({token : token , msg : "login Done"})
            
        } catch (error) {
            return res.status(500).json({msg : error.message})
        }

    } ,

    verifiedToken  :async (req , res) =>{

        try {

            const token = req.header("Authorization")
            if(!token) return res.json({msg : "no token"})
    
            jwt.verify(token , process.env.SECRET_KEY,async (err, verified) => {
                if(err) return res.json({msg : "invalid token"})
    
                const user = await Users.findById(verified.id)
                if(!user) return res.json({msg : "no user found"})
    
                return res.json({msg: "verified"})
            } )
    
            
        } catch (error) {
            return res.status(500).json({msg : error.message})
        }

       
    }
  
}

module.exports = userController