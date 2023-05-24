import express, { Request, Response } from "express";
import dotenv from "dotenv";
import dbConnect from "./src/utils/dbConnect";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes";
import productRoutes from "./src/routes/productRoutes";
import categoryRoutes from "./src/routes/categoryRoutes";
import orderRoutes from "./src/routes/orderRoutes";
import orderDetails from "./src/routes/orderDetailRoutes";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./src/middleware/erroHandler";
import authMiddleware from "./src/middleware/authMiddleware";
// dotenv.config()
dbConnect;
const app = express();
// middlware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static("uploads"));
// app.use(authMiddleware)
app.use(errorHandler);
// Routes

app.get("/", (req: Request, res: Response) => {
    res.render("pages/index");
});
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/orderdetail", orderDetails);
app.use("/api/category", categoryRoutes);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server ready and  run on port ${port}`));
