import {Cart} from '../Model/cart.js';
import cloudinary from 'cloudinary'
import mongoose from 'mongoose';

cloudinary.config({
    cloud_name: 'dqssfu7rl',
    api_key: '555615328341924',
    api_secret: 'S7a4bjYvGPrWb1yK-Ps9Sa5U93I'
  });


const addToCart= async (req, res) => {
  try {
    const { name, imageUrl, price } = req.body;

   
    const existingItem = await Cart.findOne({ name: name });
    if (existingItem) {
      return res.status(400).json({
        message: "Item is already in the cart",
      });
      }
      const uploadResponse = await cloudinary.uploader.upload(imageUrl, {
            upload_preset: 'YOUR_UPLOAD_PRESET',

          });
          const image = uploadResponse.secure_url;
      

    const cart = new Cart({
      name,
      imageUrl:image,
      price,
    });

    await cart.save();
    console.log("Added to cart successfully");
    res.status(200).json(cart);

  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "An error occurred" });
  }
};
const getCart =async (req, res) => {
    try {
      const items = await Cart.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


// const deleteFromCart = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedItem = await Cart.findOneAndDelete({ productId: id });

//     if (!deletedItem) {
//       return res.status(404).json({ message: 'Item not found in the cart' });
//     }

//     console.log(`Deleted item: ${deletedItem}`);
//     res.status(200).json({ message: 'Item deleted successfully', item: deletedItem });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'An error occurred while deleting the item from the cart' });
//   }
// };

const deleteFromCart = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send('Invalid ID format');
    }

    const deleteProduct = await Cart.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(404).send('Product not found');
    }

    res.status(200).send({ message: 'Product deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
};


export {addToCart,getCart, deleteFromCart};