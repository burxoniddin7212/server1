import { Router } from "express";
import userController from "../controller/user.controller.mjs";


let userRouter = Router();

userRouter.post('/register', userController.REGISTER);
userRouter.get('/login',userController.LOGIN);
userRouter.get('/getlogin',userController.GET);

export default userRouter