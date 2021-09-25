const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const sellerSchema = new Schema({
    email:{
        type: String, 
        required: true
    },

    password:{
        type: String, 
        required: true
    },
    
    name:{
        type: String,
        required: true,
    },

    address:{
        type: String,
        required: true
    },
    products:[
        {      
                type:mongoose.Schema.Types.ObjectId, 
                ref:"Product",
        }
    ]


},{
    timestamps: true
}); 

module.exports = mongoose.model("Seller", sellerSchema); 