import mongoose from "mongoose";


const CartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }

});
const Cart = mongoose.model("Cart", CartSchema)

export { Cart };