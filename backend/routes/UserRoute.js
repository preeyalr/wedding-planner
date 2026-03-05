import express from "express";
import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();


router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);

router.route("/test").get((req,res)=>{
    res.send("it's working")
});

export default router;