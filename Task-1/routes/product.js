const router = require("express").Router(); 
const productController = require("../controllers/product")

router.post("/api/add-product", productController.addProduct);

router.get("/api/get-products", productController.getProducts); 

router.get("/api/get-product/:id", productController.getProductById); 

module.exports = router; 