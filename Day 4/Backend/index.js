//1.Importing the express
const express = require('express')
const employeeModel = require("./model")

//2.Initialization
const app=new express()


//middleware || parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//3.Api creation

app.get('/',(req,res)=>{
    res.send("The message from api")
})


//trail api
app.get('/trail',(req,res)=>{
    res.send("This is trail message")
})

//api for adding data
app.post('/create',async(req,res)=>{
    var result = await new employeeModel(req.body)
    result.save()
    res.send("Data Added")
})

//Api for viewing data
app.get('/view',async(req,res)=>{
    var data = await employeeModel.find()
    res.json(data)
    console.log(data)
})

//Api for deleting data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("Deleted")
})
//api for updating data
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("data updated")

})

//4.Port
app.listen(3005,()=>{
    console.log("Port 3005 is running")
})
