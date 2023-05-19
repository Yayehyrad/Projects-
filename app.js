const express = require('express');

const app = express();
app.get("/" , (req , res)=>{
    res.status(200).json({success:"success"})
})

app.listen(3000 , ()=>{
    console.log("running")
})