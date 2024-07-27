import express from "express";
const category = require("../controllers/category");

const router = express.Router();

router.get("/category", category.findAll);
router.get("/categorySubList", category.findcategory);

module.exports = router;
