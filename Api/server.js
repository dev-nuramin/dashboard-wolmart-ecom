import express from "express";
import "colors";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./route/user.js";
import authRouter from "./route/auth.js";
import permissionRouter from "./route/permission.js";
import roleRouter from "./route/role.js";
import brandsRouter from "./route/Product/brand.js";
import tagsRouter from "./route/Product/tag.js";
import catsRouter from "./route/Product/category.js";
import productRouter from "./route/Product/Products/Products.js";
import { errorHandler } from "./middlewares/errorhandler.js";
import { mongoBDConnect } from "./config/db.js";
import morgan from "morgan";

// initialization
const app = express();
app.use(morgan("dev"));
dotenv.config();

// set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

// set environment vars
const PORT = process.env.PORT || 9090;

// static folder
app.use(express.static("public"));

// routing
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/permission", permissionRouter);
app.use("/api/v1/role", roleRouter);
app.use("/api/v1/brands", brandsRouter);
app.use("/api/v1/tag", tagsRouter);
app.use("/api/v1/category", catsRouter);
app.use("/api/v1/products", productRouter);

// use error handler
app.use(errorHandler);

// app listen
app.listen(PORT, () => {
  mongoBDConnect();
  console.log(`server is running on port ${PORT}`.bgCyan.black);
});
