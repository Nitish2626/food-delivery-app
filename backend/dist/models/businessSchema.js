import mongoose, { Schema } from "mongoose";
const businessSchema = new Schema({
    businessName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});
export const businessModel = mongoose.model("businesse", businessSchema);
