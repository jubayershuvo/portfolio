import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { cors_origin } from "./variables.js";
import adminRouter from "./routers/adminRoute.js";
import userRouter from "./routers/userRoutes.js";


const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: cors_origin,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.get("/", (_req, res) => {
  return res.status(200).json({ message: "ok" });
});

app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

app.use("*", (req, res) => {
  return res
    .status(404)
    .json({ success: false, message: "Route doesn't exist..!" });
});

export default app;
