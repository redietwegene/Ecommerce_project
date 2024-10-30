import express from 'express';
import { addToCart, deleteFromCart, getCart } from './controller/cart.js';
import { products, uploadImage } from './controller/product.js';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


const router =express.Router();
router.post('/addToCart',addToCart)
router.get('/cart',getCart)
router.delete('/delete/:id', deleteFromCart);
router.get('/products', products)
router.post('/upload', upload.single('image'),uploadImage)


export default router;
'/upload', upload.single('image')