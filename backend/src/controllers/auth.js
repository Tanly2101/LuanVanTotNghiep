// import jwt from "jsonwebtoken";

// // Xử lý đăng ký
// export const register = (req, res) => {
//   // Xử lý đăng ký
//   const { id } = req.body; // Giả sử khachhangId được gửi từ client
//   if (!id) {
//     return res.status(400).json({ message: "Khách hàng ID là bắt buộc" });
//   }

//   const token = jwt.sign({ id }, "your-secret-key", {
//     expiresIn: "1h",
//   });
//   res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1 giờ
//   res.json({ success: true });
// };

// // Xử lý đăng nhập
// export const login = (req, res) => {
//   // Xử lý đăng nhập
//   const { id } = req.body; // Giả sử khachhangId được gửi từ client
//   if (!id) {
//     return res.status(400).json({ message: "Khách hàng ID là bắt buộc" });
//   }

//   const token = jwt.sign({ id }, "your-secret-key", {
//     expiresIn: "1h",
//   });
//   res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1 giờ
//   res.json({ success: true });
// };
