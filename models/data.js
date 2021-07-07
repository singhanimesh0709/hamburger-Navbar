const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    author:{
        type:String
    },
    books:{
        type:String
    }
});

module.exports =  mongoose.model('book',bookSchema);
