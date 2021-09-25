const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const productSchema = new Schema({

    name:{
        type: String, 
        required: true
    },

    price:{
        type: String,
        required: true
    },

    description:{
        type: String, 
        required: true
    },

    color:{
        type: String, 
        required: true
    },

    seller: {
        
            type:mongoose.Schema.Types.ObjectId, 
            ref:"Seller",    
    }
},
{ 
    timestamps: true
} 
); 

module.exports = mongoose.model("Product", productSchema); 