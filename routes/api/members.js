const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const members = require('../../members')

router.get('/',(req,res) =>{
    res.json(members)
})
router.get('/',(req,res)=>{
    const found =members.some((member)=>member.id == req.params.uid)
    // console.log(found)
    if(found){
        res.json(members.filter(member => member.id == req.params.uid))

    // console.log(req.params.uid)
    // res.end()
    }else{
        res.status(400).json({msg:`no member found with the ${req.params.uid}`})
    }
})
router.post("/",(req,res)=>{
    console.log(req.body)
    const newMember = {
        id:uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        address:"inactive"
    }
    // console.log(newMember)
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg:"Please Fill all the field"})
    }else{
        members.push(newMember);
        return res.status(200).json(members)
    }
})
router.delete('/:id',(req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        const users = members.filter(member => member.id !== parseInt(req.params.id))
        res.status(200).json({msg:`Member Deleted`,members:users})
    }else{
        res.status(400).json({msg:`no member found with the id of ${req.params.id}`})
    }
})

router.put("/:id",(req,res)=>{
    const found =members.some(member => member.id === parseInt(req.params.id))
    if(found){
        // console.log(req.body)
        const UpMember = req.body
        members.forEach(member =>{
            if(member.id === parseInt(req.params.id)){
                member.name = UpMember.name;
                member.email = UpMember.email;
                res.json({msg:"member updated",member})
            }
        })
    }else{
        res.status(400).json({error:`No member found with the id of ${req.params.id}`})
    }
})
module.exports = router