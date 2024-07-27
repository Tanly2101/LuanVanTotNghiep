const con = require("../Config/connectDatabase");

export const findAll = async () => {
  try {
    const connection = await con.getConnection();
    const [rows, fields] = await connection.query(`
            SELECT * FROM sanpham 
        `);
    connection.release();
    return rows;
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};

export const findAllByName = async (Title) => {
  try {
    const connection = await con.getConnection();
    const [rows, fields] = await connection.query(
      `
      SELECT * FROM sanpham WHERE Title LIKE ?
      `,
      [`%${Title}%`]
    );
    connection.release();
    return rows;
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};
export const getProductById = async (id) => {
  try {
    const connection = await con.getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM sanpham WHERE id = ?",
      [id]
    );
    connection.release();
    return rows[0];
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};
export const getProductsByCategory = async (idCategory) => {
  try {
    const connection = await con.getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM sanpham s, loaisanpham b WHERE s.idCategory = b.id AND b.id = ?",
      [idCategory]
    );
    return rows;
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};
export const getProductsByPrice = async (Price) => {
  try {
    const connection = await con.getConnection();
    let query = "SELECT * FROM sanpham";
    const params = [];

    if (Price) {
      const priceConditions = {
        100000: "Price <= ?",
        500000: "Price > 100000 AND Price <= ?",
        2000000: "Price > 500000 AND Price <= ?",
        2000001: "Price > 2000000",
      };

      query += " WHERE " + priceConditions[Price];
      if (Price !== 2000001) params.push(Price);
    }

    console.log("Query:", query); // In câu truy vấn
    console.log("Params:", params); // In các tham số

    const [rows] = await connection.query(query, params);
    connection.release();
    return rows;
  } catch (error) {
    console.error("Đã xảy ra lỗi:", error);
    throw error;
  }
};
