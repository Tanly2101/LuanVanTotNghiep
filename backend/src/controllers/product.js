const productService = require('../services/product')


export const findAll = async (req, res) => {
    try {
        let data = await productService.findAll()
        res.json(data)
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }

}