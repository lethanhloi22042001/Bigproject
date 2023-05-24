// dùng mongoose để kết nối database
const mongoose = require("mongoose");
// dùng Schema để tạo bảng
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String ,
        required : true
    },
    username : {
        type : String ,
        required : true,
    },
    password : {
        type : String ,
        required : true
    },
    role : {
        type : String ,
        required : true, 
        default : 'customer',
    },
    cart : {
        items : [{
            productId : {
                type : Schema.Types.ObjectId,
                ref : 'Product',
                required : true
            },
            quantity : {
                type : Number,
                required : true
            }
        }]
    }
});
module.exports  = mongoose.model('User' ,userSchema)