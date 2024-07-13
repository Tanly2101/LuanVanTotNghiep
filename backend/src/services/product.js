const con = require('../Config/connectDatabase');

export const findAll = async () => {
    try {
        const connection = await con.getConnection();
        const [rows, fields] = await connection.query(`
            SELECT * 
            FROM sanpham
        `);
        connection.release();
        return rows;
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
};
