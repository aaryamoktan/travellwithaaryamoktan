const express = require("express");
const mongoose = require("mongoose");
const app =express();
const product = require("./routes/product")
mongoose.connect("mongodb+srv://aaryamoktan:aaryamoktan@cluster0.by8zdvz.mongodb.net/?retryWrites=true&w=majority")
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require("./routes/reg"))
const PORT =process.env.PORT || 5000;    
const path = require('path')

if(process.env.NODE_ENV==='production')
{
    app.use('/',express.static('"client/build'))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build/index.html'));
    })
}
app.listen(PORT,()=>
{
    console.log("connected")
});