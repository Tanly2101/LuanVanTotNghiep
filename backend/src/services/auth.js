// const express = require("express");
// const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");

// const app = express();
// app.use(cookieParser());

// app.post("/api/v1/register", (req, res) => {
//   // Xử lý đăng ký
//   // Nếu thành công, tạo token và gửi cookie
//   const token = jwt.sign({ userId: khachhangs.id }, "your-secret-key", {
//     expiresIn: "1h",
//   });
//   res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour
//   res.json({ success: true });
// });

// app.post("/api/v1/user", (req, res) => {
//   // Xử lý đăng nhập
//   // Nếu thành công, tạo token và gửi cookie
//   const token = jwt.sign({ userId: khachhangs.id }, "your-secret-key", {
//     expiresIn: "1h",
//   });
//   res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour
//   res.json({ success: true });
// });
