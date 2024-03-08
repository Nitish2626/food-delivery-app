import mongoose, { Schema } from "mongoose";
const productsSchema = new Schema({
    owner: {
        type: String
    },
    foodName: {
        type: String
    },
    foodImage: {
        type: String
    },
    foodPrice: {
        type: Number
    },
    foodDiscount: {
        type: Number
    }
}, {
    timestamps: true
});
export const productsModel = mongoose.model("product", productsSchema);
