const Product = require("./models/Product");
const {
      verifyToken,
      verifyTokenAndAuthorization,
    } = require("./verifyToken");

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
      const qNew = req.query.new; //new ka not need remove
      const qCategory = req.query.category;
      try {
        let products;
    
        if (qNew) {
          products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
          products = await Product.find({
            categories: {
              $in: [qCategory],
            },
          });
        } else {
          products = await Product.find();
        }
    
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json(err);
      }
    });
    
    module.exports = router;