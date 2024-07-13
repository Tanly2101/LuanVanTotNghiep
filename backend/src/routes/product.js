import express from 'express'
import * as product from '../controllers/product'


const router = express.Router()

router.get('/product', product.findAll)



module.exports = router;
