const productService = require("../services/product");

export const findAll = async (req, res) => {
  try {
    let data = await productService.findAll();
    res.json(data);
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi" });
  }
};
export const findAllByName = async (req, res) => {
  const { Title } = req.query;
  if (!Title) {
    return res.status(400).json({ error: "Tên sản phẩm là tham số bắt buộc." });
  }
  try {
    // Gọi hàm của productService để tìm kiếm sản phẩm theo tên
    const products = await productService.findAllByName(Title);
    res.json(products);
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi khi tìm kiếm sản phẩm." });
  }
};
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
    }
    res.json(product);
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi khi tìm kiếm sản phẩm." });
  }
};
export const getProductsByCategory = async (req, res) => {
  const { idCategory } = req.params;
  try {
    const products = await productService.getProductsByCategory(idCategory);
    if (!products) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
    }
    res.json(products);
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi khi tìm kiếm sản phẩm." });
  }
};
// filter & pagination

export const getProductsByPrice = async (req, res) => {
  const { Price } = req.query;

  // Validate Price
  if (!Price || isNaN(Number(Price))) {
    return res.status(400).json({ error: "Giá không hợp lệ" });
  }

  try {
    const products = await productService.getProductsByPrice(Number(Price));

    // Check if products is an array
    if (!Array.isArray(products)) {
      return res
        .status(500)
        .json({ error: "Có lỗi xảy ra khi truy xuất sản phẩm." });
    }

    if (!products) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm" });
    }

    res.json(products);
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi khi tìm kiếm sản phẩm." });
  }
};
