const Seller = require("../model/Seller"); 

exports.createSeller = async (req, res) => {
    
   const {email, password, name, address, } = req.body; 
    
   const seller = new  Seller({
    email, 
    password,
    name, 
    address
   }); 

   await seller.save();
   return res.json(seller); 

}