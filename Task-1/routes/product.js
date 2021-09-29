const router = require("express").Router(); 
const productController = require("../controllers/product")

router.post("/api/add-product", productController.addProduct);

router.get("/api/get-products", productController.getProducts); 

router.get("/api/get-product/:id", productController.getProductById);

router.put("/api/update-product/:id", productController.updateProduct); 

module.exports = router; 