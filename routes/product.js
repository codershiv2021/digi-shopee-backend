const Product = require("../models/Product");
const {
      verifyToken,
      verifyTokenAndAuthorization,verifyTokenAndAdmin
    } = require("./verifyToken");

const router = require("express").Router();

//CREATE 

router.post("/",verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get the product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products

router.get("/", async (req, res) => {
      // const qNew = req.query.new; //new ka not need remove
      // const qCategory = req.query.category;
      try {
        // let products;
    //how product will appear isko can change if want no categories all just print
        // if (qNew) {
        //   products = await Product.find().sort({ createdAt: -1 }).limit(1);
        // } else if (qCategory) {
        //   products = await Product.find({
        //     categories: {
        //       $in: [qCategory],
        //     },
        //   });
        // } else {
        const products = await Product.find();
        // }
    
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json(err);
      }
    });
    
    module.exports = router;
    

    // "title" : "nike shoes",
    // "desc" : "test",
    // "img" : "test",
    // "categories" : ["shoes","men"],
    // "size" : "10",
    // "color" : "grey",
    // "price" : "9000"
    