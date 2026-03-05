import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    // basic vendor info
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ["photographer", "decorator", "caterer", "pandit"],
        required: true,
    },
    description: {
        type: String,
        required: false,
    },

    // business details
    priceRange: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: false,
    },

    // media and contact
    images: [{
        type: String,
        required: false,
    }],
    contactPhone: {
        type: String,
        required: false,
    },
    contactEmail: {
        type: String,
        required: false,
    },

    // availability
    availabilityDates: [{
        type: Date,
        required: false,
    }],
}, { timestamps: true });

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;
