const express = require('express')
const path = require('path')
const cors = require('cors')
// const uuid = require('uuid')
const members = require('./members')
// console.log(members)
const { getMaxListeners } = require('process')
const { response } = require('express')
const app = express()//Object
app.use(cors())

// app.use((req,res,next) =>{
    
//     console.log("App use function")
//     next()
// })
// const middleware =(req,res,next) =>{
//     console.log("middleware function invoke")
//     next();

// }
// app.get("/abc",middleware,(req,res)=>{
//     console.log(req.body)
//     res.send("<h1> HELLO WORLD</h1>")
//     // res.send("bye")
// })
// app.post("/xyz",(req,res)=>{
//     res.send("<h1> XYZ</h1>")

// })
app.use(express.json())

app.use('/api/members',require('./routes/api/members'))

// app.get('/api/members',(req,res) =>{
//     res.json(members)
// })
// app.get('/api/members/:uid',(req,res)=>{
//     const found =members.some((member)=>member.id == req.params.uid)
//     // console.log(found)
//     if(found){
//         res.json(members.filter(member => member.id == req.params.uid))

//     // console.log(req.params.uid)
//     // res.end()
//     }else{
//         res.status(400).json({msg:`no member found with the ${req.params.uid}`})
//     }
// })
// app.post("/api/members",(req,res)=>{
//     console.log(req.body)
//     const newMember = {
//         id:uuid.v4(),
//         name:req.body.name,
//         email:req.body.email,
//         address:"inactive"
//     }
//     // console.log(newMember)
//     if(!newMember.name || !newMember.email){
//         return res.status(400).json({msg:"Please Fill all the field"})
//     }else{
//         members.push(newMember);
//         return res.status(200).json(members)
//     }
// })
// app.delete('/api/members/:id',(req,res)=>{
//     const found = members.some(member => member.id === parseInt(req.params.id))
//     if(found){
//         const users = members.filter(member => member.id !== parseInt(req.params.id))
//         res.status(200).json({msg:`Member Deleted`,members:users})
//     }else{
//         res.status(400).json({msg:`no member found with the id of ${req.params.id}`})
//     }
// })

// app.put("/api/members/:id",(req,res)=>{
//     const found =members.some(member => member.id === parseInt(req.params.id))
//     if(found){
//         // console.log(req.body)
//         const UpMember = req.body
//         members.forEach(member =>{
//             if(member.id === parseInt(req.params.id)){
//                 member.name = UpMember.name;
//                 member.email = UpMember.email;
//                 res.json({msg:"member updated",member})
//             }
//         })
//     }else{
//         res.status(400).json({error:`No member found with the id of ${req.params.id}`})
//     }
// })
app.get("/abc",(req,res)=>{
    res.send("<h1> YOU ENTERED URL ABC")
})

app.use(express.static(path.join(__dirname,'public')))
const PORT=5000;
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))