import mongoose, { Schema } from "mongoose";
const businessSchema = new Schema({
    businessName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
export const businessModel = mongoose.model("businesse", businessSchema);
