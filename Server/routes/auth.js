const router  = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');


//SIGNUP

router.post("/register", async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt)
        const neewUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
        });
        const user = await neewUser.save();
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

//Login

router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Invalid Username");

        const validate = await bcrypt.compare(req.body.password, user.password);
        !validate && res.status(400).json("Invalid Password");

        const{password, ...others} = user._doc;
        res.status(200).json(others);
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports= router