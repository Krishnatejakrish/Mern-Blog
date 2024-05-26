import express from "express";
import Product from "../models/Product.js";

const ProductRoutes = express.Router();

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products, pagination: {} });
    // console.log(products[0])
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

ProductRoutes.route("/").get(getProducts);

export default ProductRoutes;
