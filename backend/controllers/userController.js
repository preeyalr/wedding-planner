import express from "express";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
    const { name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"Please fill all the fields"});
    }
    const existingUser =  await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"User already exists"});
    }
    const user = await User.create({
        name,
        email,
        password
    });
    res.status(201).json({message:"User registered successfully", user});
}

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
    res.status(200).json({ message: "Login successful", user });
}