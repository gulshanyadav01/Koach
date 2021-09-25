const express = require("express");
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser"); 

const app = express();

app.use(express.json({extended:false})); 


// app.use("/", (req, res) => {
//     res.send("hello api is running"); 
// })

// database is connected 
mongoose.connect("mongodb+srv://gulshan:Tzd8Rx20iYBRgyFG@cluster0.pzhj1.mongodb.net/koach?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log("database is connected")
})
.then(() => {

    app.listen(5000, () => {

        console.log("app is running"); 
    
    }) 
})

const productRouter  = require("./routes/product.js"); 
const sellerRouter  = require("./routes/seller.js"); 


app.use(productRouter); 
app.use(sellerRouter); 

