//Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js
import express from 'express';
//Body-parser is the Node. js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it. 
import bodyParser from 'body-parser';
//Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework
import mongoose from 'mongoose';
//Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts
import cors from 'cors';

//Routes
import postRoutes from './routes/posts.js';
import productRoutes from './routes/product.js';

const app =express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//Add the routes
app.use('/posts',postRoutes);
app.use('/product',productRoutes);

//modify the username, password and DB name
// username = maikhalil
// password = Wg6uuywEc8VspucR
// DB = test

const CONNECTION_URL='mongodb+srv://maikhalil:Wg6uuywEc8VspucR@cluster0.u9uyw.mongodb.net/test?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT} `)))
.catch((error)=>console.log(error.message) );

//mongoose.set('useFindAndModify',false);