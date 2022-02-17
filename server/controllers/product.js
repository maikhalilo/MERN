import express from 'express';
import mongoose from 'mongoose';

import Product from '../models/product.js';

const router = express.Router();

export const getProducts = async (req, res) => { 
    try {
        const productMessages = await Product.find();
                
        res.status(200).json(productMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProduct = async (req, res) => { 
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newProductMessage = new Product({ title, message, selectedFile, creator, tags })

    try {
        await newProductMessage.save();

        res.status(201).json(newProductMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Product with id: ${id}`);

    const updatedProduct = { creator, title, message, tags, selectedFile, _id: id };

    await ProductMessage.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updatedProduct);
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    await ProductMessage.findByIdAndRemove(id);

    res.json({ message: "Product deleted successfully." });
}

export const likeProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);
    
    const product = await Product.findById(id);

    const updatedProduct = await Product.findByIdAndUpdate(id, { likeCount: product.likeCount + 1 }, { new: true });
    
    res.json(updatedProduct);
}


export default router;