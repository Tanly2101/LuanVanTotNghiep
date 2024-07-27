const categoryService = require("../services/categoryService");

export const findAll = async (req, res) => {
  try {
    let data = await categoryService.findAll();
    res.json(data);
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi" });
  }
};
export const findcategory = async (req, res) => {
  try {
    let data = await categoryService.findcategory();
    res.json(data);
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi" });
  }
};
