const con = require("../Config/connectDatabase");

export const findAllByBrand = async () => {
  try {
    const connection = await con.getConnection();
    const [rows, fields] = await connection.query(
      `
        SELECT * FROM brand 
        `
    );
    connection.release();
    return rows;
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};
