import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category: {
        type: String,
        enum: ["venue", "decoration", "food", "photography"],
        required: true,
    },
    plannedAmount: {
        type: Number,
        required: true,
    },
    actualAmount: {
        type: Number,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const Budget = mongoose.model("Budget", budgetSchema);
export default Budget;
