import { Router } from "express";
import { upload } from "../utils/multer.js";
import { addProject, createAdmin, loginAdmin } from "../controllers/adminController.js";
import { verifyAdminJWT } from "../middlewares/adminMiddleware.js";

const adminRouter = Router();


adminRouter.route('/register').post(createAdmin)
adminRouter.route('/login').post(loginAdmin)
adminRouter.route('/project/add').post(upload.single('image'), addProject);
adminRouter.route('/project/delete/:_id').post(createAdmin)
adminRouter.route('/project/edit/:_id').post(createAdmin)




export default adminRouter;
