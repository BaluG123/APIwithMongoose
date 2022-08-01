const express = require('express');
const app = express();
require('./config');
const details = require('./detail');
app.use(express.json());

app.post("/create",async(req,res)=>{
    let data = new details(req.body)
    res.send(req.body)
    let result = await data.save()
    console.log(result)
})

app.get("/list",async(req,res)=>{
    let data = await details.find();
    res.send(data);
})

app.delete("/delete/:_id",async(req,res)=>{
    console.log(req.params)
    let data = await details.deleteOne(req.params)
    console.log(data)
    res.send(data)
})

app.put("/update/:_id",async(req,res)=>{
    console.log(req.params)
    let data=await details.updateOne(
        req.params,
        {$set: req.body}
    )
    res.send(data);
    console.log('updated successfully!')
})


app.listen(5000);
console.log('server is running on 5000')