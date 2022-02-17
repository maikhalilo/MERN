//ms sql
import express from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';
//import { dboperations } from './dboperations.js';
import order from './order.js';

//var Db  = require('./');
//var Order = require('./');
//const dboperations = require('./dboperations');


var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/orders').get((request,response)=>{

    dboperations.getOrders().then(result => {
       response.json(result[0]);
    })

})

router.route('/orders/:id').get((request,response)=>{

    dboperations.getOrder(request.params.id).then(result => {
       response.json(result[0]);
    })

})

router.route('/orders').post((request,response)=>{

    let order = {...request.body}

    dboperations.addOrder(order).then(result => {
       response.status(201).json(result);
    })

})




var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);


