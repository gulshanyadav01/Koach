const router = require("express").Router();

const sellerController  = require("../controllers/seller.js")

router.post("/api/create-seller", sellerController.createSeller); 

module.exports = router; 