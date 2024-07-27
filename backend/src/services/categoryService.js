const con = require("../Config/connectDatabase");

export const findAll = async () => {
  try {
    const connection = await con.getConnection();
    const [rows, fields] = await connection.query(`
              SELECT * FROM loaisanpham
          `);
    connection.release();
    return rows;
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};
export const findcategory = async () => {
  try {
    const connection = await con.getConnection();
    const [rows, fields] = await connection.query(`
               SELECT * FROM loaisanphamphu
          `);
    connection.release();
    return rows;
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};
