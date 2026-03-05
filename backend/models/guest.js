import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    familySide: {
        type: String,
        enum: ["bride", "groom"],
        required: false,
    },
    rsvpStatus: {
        type: String,
        enum: ["pending", "accepted", "declined"],
        default: "pending",
    },
    mealPreference: {
        type: String,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    }
}, { timestamps: true });

const Guest = mongoose.model("Guest", guestSchema);
export default Guest;
