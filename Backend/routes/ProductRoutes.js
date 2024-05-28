import express from "express";
import Product from "../models/Product.js";

const ProductRoutes = express.Router();

const getProducts = async (req, res) => {
  const page = parseInt(req.params.page); // it gonna give howmany pages we need 1,2, or 3
  const perPage = parseInt(req.params.perPage); // it gonna give owmany items perpagen 10,15 or 20

  const products = await Product.find({});

  if (page && perPage) {
    const totalPages = Math.ceil(products.length / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    res.json({
      products: paginatedProducts,
      pagination: { currentPage: page, totalPages },
    });
  } else {
    res.json({ products, pagination: {} });
  }
};

ProductRoutes.route("/:page/:perPage").get(getProducts);
ProductRoutes.route("/").get(getProducts);

export default ProductRoutes;
