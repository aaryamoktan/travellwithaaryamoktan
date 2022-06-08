const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:
        {
            type:String,
            minlenght:8,
            required:true,
        },
        number:{
            type:Number,
            minlenght:10,
            maxLength:10,
            required:true,
            unique:true,
        },
    }
)
module.exports = mongoose.model("user",userSchema);