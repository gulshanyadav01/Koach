const Product = require("../model/Product"); 

// create Product
// Post : method
// @ /api/add-product
// Desc : end point for creating the product 
exports.addProduct  = async (req, res) => {

    const { name, price, description, seller, color} = req.body; 

    try{
        const product = new Product({
            name,
            price,
            description,
            seller, 
            color
        }); 

        await product.save();
        return res.json(product); 

    }catch(err){
        console.log(err); 
    }

}

// Get All Product 
// Get Method 
// @/api/get-products
// Get All Products 

exports.getProducts = async (req, res) => {
    try{
        const products = await Product.find(); 
        if(!products){
            return res.json({message : "no product available"}); 
        }
        return res.json(products); 

    }catch(err){
        console.log(err); 
    }
}


// Get one  Product : 
// Get Method
// @/api/get-product/:id
// get product by id 

exports.getProductById = async (req, res) => {

    // get the product id which is pass in url. 
    
    try{

        const productId = req.params.id
        if(!productId){

            return res.json({message: "please provide correct url"}); 
        }

        const product = await Product.findOne({_id: productId});
        if(!product){
            return res.json({message: "product doesn't exist"}); 
        }
        return res.json(product);

    }catch(err){

        console.log(err);
    }

}
