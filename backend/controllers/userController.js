import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  res.status(201).json({ message: "User registered successfully", user });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign({
    id:user._id,
    email:user.email,
  },
  process.env.JWT_SECRET,
  {expiresIn:"7d"}
);
 res.cookie("token", token, {
   httpOnly: true,
   secure: false, // true in production
   sameSite: "lax",
   maxAge: 7 * 24 * 60 * 60 * 1000,
 });

 res.status(200).json({
   success: true,
   message: "Logged in successfully",
 });
};

export const updateProfile = async (req,res) => {
    const {email} = req.user;
    if(!email) {
        return res.status(400).json({ message:"Invalid User" });
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({ message: "User doesn't exist"});
    }
    const {name,phone,weddingDate,partnerName} = req.body;
    if(name){
        user.name = name;
    }
    if(phone){
        user.phone = phone;
    }
    if(weddingDate){
        user.weddingDate = weddingDate;
    }
    if(partnerName){
        user.partnerName=partnerName;
    }
    await user.save();

    res.status(200).json({
        success:true,
        user,
    })
}

export const getProfile = async (req,res)=>{
     res.status(200).json({
        success: true,
        user: req.user
    });
};
