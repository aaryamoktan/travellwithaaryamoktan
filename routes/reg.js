const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const data = require("../database/book");
const con = require("../database/contact");
const user = require("../database/registration");
const booking = require("../database/book");
router.post("/book", async (req, res) => {
  try {
    const { name, number, Package, price, select, date } = req.body;
    if (!name) {
      res.status(400).send("name is required");
    }
    if (!number) {
      res.status(400).send("number is required");
    }
    const data1 = new data({
      name,
      number,
      Package,
      price,
      select,
      date,
    });
    data1.save();
  } catch (err) {
    res.status(400).send()
  }
});
router.post("/contack", (req, res) => {
  const { name, email, gender, problem, quary } = req.body;

  const data2 = new con({
    name,
    email,
    gender,
    problem,
    quary,
  });
  data2.save();
});
router.post("/registration", async (req, res) => {
  try {
    const { name, email, password, number } = req.body;
    if (!name) {
      res.status(400).send("name is required");
    }
    if (!email) {
      res.status(400).send("email is required");
    }
    if (!password) {
      res.status(400).send("password is required");
    }
    if (!number) {
      res.status(400).send("number is required");
    }
    const find = await user.findOne({ email: email });
    if (find) {
      res.status(400).send("email already exit");
    } else {
      const user1 = new user({
        name,
        email,
        password,
        number,
      });
      await user1.save();
      res.status(201).send("register sucesfully");
    }
  } catch (err) {
    console.log(err);
  }
});
router.post("/login",async(req,res)=>
{
 try{
   const {email,password} = req.body;
   const finduser = await user.findOne({email});
   if(!finduser) return res.status(400).send("email does not exit");
   if(!(password===finduser.password)) return res.status(400).send("password is incorrect")
   const token = jwt.sign({_di:finduser._id},"mynakdjfkpjdijsifodkdnogodifngdkgjfojjgkhfgoijohf",
   {
     expiresIn:"1d"
   })
   res.status(201).json(
     {
       token,
       finduser
     }
   )
 
 }
 catch(error)
 {
   console.log(error)
 }
  
})
router.get("/display",async(req,res)=>
{
  try{
    const data4 =await booking.find({})
    res.json(
      data4
    )
  
  }
  catch(err)
  {
    console.log(err)
  }
  
    
});
module.exports = router;
