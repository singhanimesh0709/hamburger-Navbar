const express = require("express");
const router = express.Router();


// model bhi import karna hoga

//default page load
router.get('/',(req,res)=>{
    
            
 res.render('pages/home');
            
});

//search-*******IMPORTANT*******
// router.get('/search',(req,res)=>{
//    try {
//             bookModel.find({$or:[{author:{'$regex':req.query.dsearch}},{books:{'$regex':req.query.dsearch}}]},(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }else{
//                     res.render('pages/home',{data:data});
//                 }
//             })
//    } catch (error) {
//        console.log(error);
//    }
// });

module.exports = router;






//redundant as of now==============
// router.post('/',(req,res)=>{
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