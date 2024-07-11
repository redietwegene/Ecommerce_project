import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cloudinary from 'cloudinary';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 3000;
const mongourl = "mongodb://0.0.0.0:27017/shopping";

const app = express();
app.use(express.json());
app.use(cors());

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dqssfu7rl',
  api_key: '555615328341924',
  api_secret: 'S7a4bjYvGPrWb1yK-Ps9Sa5U93I'
});

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Database is connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

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

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('image'), async (req, res) => {
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
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get("/products", async (req, res) => {
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
});
