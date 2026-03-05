import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    // relationship references
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",
        required: true,
    },

    // booking details
    eventDate: {
        type: Date,
        required: true,
    },
    packageSelected: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },

    // booking status
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
        required: true,
    },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
