const mongoose = require('mongoose');

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

//default page load
app.get('/',(req,res)=>{
     try {
          bookModel.find((err,data)=>{
              if(err){
                  console.log(err)
              }else{
                  res.render('pages/home',{data:data});
              }
          });
     } catch (error) {
          console.log(error);
     }
});

//search
app.get('/search',(req,res)=>{
    try {
             bookModel.find({$or:[{author:{'$regex':req.query.dsearch}},{books:{'$regex':req.query.dsearch}}]},(err,data)=>{
                 if(err){
                     console.log(err);
                 }else{
                     res.render('pages/home',{data:data});
                 }
             })
    } catch (error) {
        console.log(error);
    }
});

// app.post('/',(req,res)=>{
//     try {
//            const books = new bookModel({
//                author:req.body.author,
//                books:req.body.book
//            });
//            books.save((err,data)=>{
//                if(err){
//                    console.log(err)
//                }else{
//                    res.redirect('/');
//                }
//            })
//     } catch (error) {
//         console.log(error);
//     }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`listening on port : ${PORT}`));