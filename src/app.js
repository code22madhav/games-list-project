const express = require('express');
const app=express();
const path= require('path');
const static_path = path.join(__dirname, "../public");
const port= process.env.PORT || 2000;

app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.send("welcomme");
})

app.listen(port, ()=>{
    console.log("listen");
})
