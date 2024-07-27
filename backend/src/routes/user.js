import express from "express";
import * as user from "../controllers/user";

const router = express.Router();

router.post("/user", user.checkAccount);
router.post("/register", user.createAccount);
module.exports = router;
