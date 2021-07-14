const District = require('../models/districtModel')
const States = require('../models/stateModel')

const districtController = {

    addDistrict : async (req,res) => {

        const {districtName } = req.body
        // console.log(req.body)
        const newDistrict =  new District({
            districtName,
            state_id : req.body.state_id
        })

        const city = await newDistrict.save()

        // console.log(city)

        const stateData = await States.findById({_id : req.body.state_id})
        // console.log(stateData)
        
        
        // console.log(req.data)
        res.json({ user : req.data.username  , state : stateData.stateName , district : districtName ,  msg: "District Added"})
    } ,

    getDistrict : async(req,res) => {

        const district = await District.find()

        // console.log(district)
        console.log(district[0])
        console.log(district[0].state_id)
        // console.log(req.data)
        // console.log(req.data.username)

        const stateData = await States.findById({_id : district[0].state_id})
        console.log("state" , stateData)
     
        res.json({name : req.data.username ,state: stateData.stateName , districts : district})
    }
    
}

module.exports = districtController