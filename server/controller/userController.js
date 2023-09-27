import  express  from "express";
import userModel from "../model/userSchema.js";
import { generateAuthToken } from "../middleware/authToken.js";
const router=express.Router()

router.post('/signup',async(req,res)=>{
    try {
        const obj=req.body
        const user= await userModel.findOne({
            email:obj.email
        })
        if (!user) {
            await userModel.create({
                username:obj.username,
                email:obj.email,
                password:obj.password
            })
            res.json({ "status":"success","message":"Successfully registered" })
        } else {
            res.json({"status":"failed","message":"Email already registered"})
        }

    } catch (error) {
        console.log(error.message);
    }
})

router.post('/login',async(req,res)=>{
    try {
        const obj=req.body
        const user=await userModel.findOne({ email:obj.email })
        if (user) {
            if (user.password==obj.password) {
                const token=await generateAuthToken(user)
                res.json({ "status":"success","message":"Successfully registered","token":token })
            } else {
                res.json({"status":"failed","message":"Password didn't match"})
            }
        } else {
            res.json({"status":"failed","message":"Please registered your email"})
        }
    } catch (error) {
        console.log(error.message);
    }
})



export default router