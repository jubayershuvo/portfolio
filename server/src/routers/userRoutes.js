import { Router } from "express";
import { allProjects } from "../controllers/userController.js";

const userRouter = Router();

userRouter.route("/projects").get(
  allProjects
);



export default userRouter;
