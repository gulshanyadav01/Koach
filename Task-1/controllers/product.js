const Product = require("../model/Product"); 
const Seller = require("../model/Seller"); 

// create Product
// Post : method
// @ /api/add-product
// Desc : end point for creating the product 
exports.addProduct  = async (req, res) => {

    const { name, price, description, color} = req.body; 
    // seller = "614f35fd4f29de114530997e"
    // let seller; 

    try{
        const product = new Product({
            name,
            price,
            description,
            seller:"614f407d1e9f809d65100012",
            color
        }); 

        const  seller = await Seller.findOne({_id : "614f407d1e9f809d65100012"});
         
        
        await product.save();
        seller.products.push(product); 
        await seller.save(); 
        // return res.json(seller);
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

        const product = await Product.findOne({_id: productId}).populate("seller",["name", "email", "address"]);
         
        if(!product){
            return res.json({message: "product doesn't exist"}); 
        }
        return res.json(product);

    }catch(err){

        console.log(err);
    }

}
