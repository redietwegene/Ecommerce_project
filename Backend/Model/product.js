import mongoose from "mongoose";


const dataSchema = new mongoose.Schema({
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

const Product = mongoose.model("Product", dataSchema);

export { Product };
