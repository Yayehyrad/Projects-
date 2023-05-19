const express = require('express');
const fs = require('fs')
require("./resources/data.json")


const tours = JSON.parse(fs.readFileSync("./resources/data.json"))
const app = express();
app.get("/api/v1/tours" , (req , res)=>{
    res.status(200).json({status:"success" , data:{tours}})
})

app.listen(3000 , ()=>{
    console.log("running")
})