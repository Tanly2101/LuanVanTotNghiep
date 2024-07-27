const con = require("../Config/connectDatabase"); // Điều chỉnh đường dẫn tới mô hình User nếu cần

// Route để lấy dữ liệu người dùng
export const checkAccount = async (phone) => {
  try {
    const connection = await con.getConnection();
    const [rows, fields] = await connection.query(`
          SELECT * FROM khachhangs WHERE phone= ${phone}
        `);
    connection.release();
    return rows;
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};
export const createAccount = async (nameTK, phone, password) => {
  try {
    const connection = await con.getConnection();
    const query = `
      INSERT INTO khachhangs (nameTK, phone, password, vaitro, createdAt) 
      VALUES (?, ?, ?, 2, NOW())
    `;
    const [result] = await connection.query(query, [nameTK, phone, password]);
    connection.release();
    return result;
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};
