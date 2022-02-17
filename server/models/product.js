import  mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile: String,
    price:Number,
    currency:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const Product = mongoose.model('product',productSchema);

export default Product;
