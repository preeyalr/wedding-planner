import express from "express";
import { Router } from "express";
import { registerUser, loginUser,getProfile, updateProfile } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/AuthMiddleware.js";

const router = express.Router();


router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(isAuthenticated,getProfile).put(isAuthenticated,updateProfile);

router.route("/test").get((req,res)=>{
    res.send("it's working")
});

export default router;