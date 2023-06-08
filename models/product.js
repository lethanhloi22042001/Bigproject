const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({

  img : {
    type : String,
    require : true ,
  },
  description : {
    type : String,
    require : true
  },
  img_creator : {
    type : String,
    require : true
  },
  title :{
    type : String,
    require : true
  } ,
  name_creator : {
    type : String,
    require : true
  },
  price : {
    type : Number,
    require : true
  }
  ,userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},{
  timestamps : true
});

module.exports = mongoose.model("Product", productSchema);
