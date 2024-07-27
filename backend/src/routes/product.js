import express from "express";
import * as product from "../controllers/product";

const router = express.Router();

router.get("/", product.findAll);
router.get("/search", product.findAllByName);
router.get("/price", product.getProductsByPrice);
router.get("/:id", product.getProductById);
router.get("/products/:idCategory", product.getProductsByCategory);

module.exports = router;
