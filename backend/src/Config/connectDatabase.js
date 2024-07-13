
const mysql = require('mysql2/promise');

const con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "2101",
  database: "campingk"
});

const connectDatabase = async () => {
  try {
    const connection = await con.getConnection();
    console.log('Connection has been established successfully.');
    connection.release();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connectDatabase();

module.exports = con;



