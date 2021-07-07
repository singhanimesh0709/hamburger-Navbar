const mongoose = require('mongoose');
const routes = require('./routes/main');
const express = require('express');
const bookModel =  require('./models/data');
const dotenv= require('dotenv');
dotenv.config();


//connect to db
const connectDB = require('./config/db');
connectDB(); // wha se humne function export ki thii, toh yha pe hum  usse call bhi toh karenge

//init app
const app = express();

//set view engine
app.set('view engine','ejs');
app.use(express.static('public'));
///fetch the data from request
app.use(express.urlencoded({extended:false}));

//routes
app.use(routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`listening on port : ${PORT}`));