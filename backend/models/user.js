import mongoose from "mongoose";    
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    // primary identity fields
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    // additional profile fields
    phone: {
        type: String,
        required: false,
    },
    weddingDate: {
        type: Date,
        required: false,
    },
    partnerName: {
        type: String,
        required: false,
    },
    city:{
        type:String,
        required:false,
    },
}, { timestamps: true });



userSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return ;
    }

    this.password = await bcrypt.hash(this.password, 10);

});


// 🔑 Compare password (for login)
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};




const User = mongoose.model("User", userSchema);

export default User;