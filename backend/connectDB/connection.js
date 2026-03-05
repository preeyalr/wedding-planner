import mongoose from "mongoose";

const connectdatabase = async (url)=>{
     try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectdatabase;
