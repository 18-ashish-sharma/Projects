const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const Users = require('../models/userModel')


const auth = (req,res,next) => {

    try {

        const token = req.header("Authorization")
        
        if(!token) return res.status(400).json({mag : "Invalid Token"})

        jwt.verify(token , process.env.SECRET_KEY  , async (err, user) => {
            if(err) return res.status(400).json({msg: "Authorization not valid"})
            // console.log(user)
            const userData = await Users.findById(user.id)
            req.data = userData
            req.user = user
            next()
        })
    } catch (error) {
        return res.status.json({msg:error.message})
    }

}

module.exports = auth