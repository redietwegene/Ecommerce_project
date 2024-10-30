
import multer from 'multer';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cloudinary from 'cloudinary';
import { Product } from '../Model/product.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// const app = express();


const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadImage = async (req, res) => {
  try {
    const { name, price } = req.body;

    const result = await new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream((error, result) => {
        if (error) reject(error);
        else resolve(result);
      }).end(req.file.buffer);
    });

   
    const product = new Product({
      name,
      price: parseFloat(price),
      imageUrl: result.secure_url,
    });

    const savedProduct = await product.save();

    res.json({ success: true, product: savedProduct });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
};




const products= async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
};
export {products ,uploadImage}


// app.post("/cart", async (req, res) => {
//   try {
//     const { name, imageUrl, price } = req.body;

   
//     const existingItem = await Cart.findOne({ name: name });
//     if (existingItem) {
//       return res.status(400).json({
//         message: "Item is already in the cart",
//       });
//     }

//     const cart = new Cart({
//       name,
//       imageUrl,
//       price,
//     });

//     await cart.save();
//     console.log("Added to cart successfully");
//     res.status(200).json(cart);

//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ message: "An error occurred" });
//   }
// });
// app.get('/cart', async (req, res) => {
//   try {
//     const cart = await Cart.find({});
//     res.status(200).json(cart)
    
//   } catch (error) {
//     res.status(500).json({
//       message:"error in fetching item"
//     })
//   }
// })
// app.post("/delete/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).send('Invalid ID format');
//     }

//     const deleteProduct = await Cart.findByIdAndDelete(id);

//     if (!deleteProduct) {
//       return res.status(404).send('Product not found');
//     }

//     res.status(200).send({ message: 'Product deleted successfully' });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Internal server error');
//   }
// });
