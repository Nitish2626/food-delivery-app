import mongoose, { Schema } from "mongoose";
import { productsModel } from "./productsSchema.js";

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
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }
    ]
},
    {
        timestamps: true
    }
);

export const businessModel = mongoose.model("businesse", businessSchema);