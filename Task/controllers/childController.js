const Child = require('../models/childModel')
const District = require('../models/districtModel')
const States = require('../models/stateModel')

const childController = {
    addChild : async (req, res)=>{
        const {childName , sex , dateofbirth ,fatherName, motherName  } = req.body

        const stateData = await States.findById({_id : req.body.state_id})
        console.log("state",stateData)

        const districtData = await District.findById({_id : req.body.district_id})
        console.log("district",districtData)

        const newChild = new Child({
            childName ,
            sex ,
            dateofbirth,
            fatherName,
            motherName,
            // state_id : req.body.state_id ,
            // district_id : req.body.district_id,
            userName : req.data.username, 
            stateName : stateData.stateName,
            districtName : districtData.districtName

        })

        console.log("new Child data ",newChild)
        const child = newChild.save()
        console.log(childName)
       
        res.json({name : req.data.username, state : stateData.stateName ,district : districtData.districtName,Child : childName ,  msg: "Child Added"})

    },

    getChildren : async (req,res)=>{
        const children = await Child.find()

        console.log(children)

        res.json({name : req.data.username ,children : children})
    }


}

module.exports = childController