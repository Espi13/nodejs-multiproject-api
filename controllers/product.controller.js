const Product = require("../models").product;

//Function that return a chunk paginated of products
//Page should be the start by 1
const getAllProducts = async (req, res) => {
  console.log("Ha llegado", req.body);
  const { page, limit } = req.body;
  const offset = (page - 1) * limit;

  const products = await Product.findAndCountAll({
    limit: limit,
    offset,
  });
  return res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
