import express from "express";
import { getProducts,createProduct,getProduct,updateProduct ,deleteProduct,likeProduct} from '../controllers/product.js'
import { getPosts,createPost,getPost,updatePost ,deletePost,likePost} from '../controllers/posts.js'

const router=express.Router();

router.get('/',getProducts);
router.post('/',createProduct);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id/likePost', likeProduct);

export default router;