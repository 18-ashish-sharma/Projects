const States = require('../models/stateModel')


const stateController = {

    addState : async (req,res) => {
        const {stateName } = req.body

        const newState =  new States({
            stateName,
            user_id : req.user.id
        })

        const state = await newState.save()

        console.log(state)
        console.log(req.data)
        res.json({ user : req.data.username , state :  stateName , msg: "state Added"})
    } ,

    getStates : async(req,res) => {

        const states = await States.find({user_id : req.user.id})
        console.log(req.data)
        console.log(req.data.username)
        console.log(states)
        res.json({name : req.data.username , states : states})
    }
    
}

module.exports = stateController