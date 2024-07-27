const express = require("express");
const dotenv = require("dotenv");
import cors from "cors";
import initRoutes from "./src/routes";
// import initRoutes from './src/routes'

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true, // Cho phép thông tin xác thực
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

const port = process.env.PORT || 8888;
app.get("/", (req, res) => {
  res.send("hello world");
});
// initRoutes(app)

app.listen(port, () => console.log(`server running at port ${port}`));
// const listner = app.listen(port , () => {
//     console.log(`server is running in port: ${listner.address().port}` )
// })
