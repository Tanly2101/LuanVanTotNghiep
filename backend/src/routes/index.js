import authRouter from "./auth";
import productRouter from "./product";
import userRouter from "./user";
import categoryRouter from "./categoryRoutes";
import filterRouter from "./filterRoutes";

const initRoutes = (app) => {
  // app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1", userRouter);
  app.use("/api/v1", categoryRouter);
  app.use("/api/v1/filter", filterRouter);
  return app.use("/", (req, res) => {
    res.send("sever on ..");
  });
};
export default initRoutes;
