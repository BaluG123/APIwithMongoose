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
app.listen(5000);
console.log('server is running on 5000')