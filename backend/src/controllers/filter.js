const filterService = require("../services/filter");
export const findAllByBrand = async (req, res) => {
  try {
    let data = await filterService.findAllByBrand();
    res.json(data);
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi" });
  }
};
