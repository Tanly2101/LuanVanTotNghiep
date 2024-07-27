import express from "express";
import * as filter from "../controllers/filter";

const router = express.Router();

router.get("/", filter.findAllByBrand);

module.exports = router;
