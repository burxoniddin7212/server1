import { Router } from "express";
import userController from "../controller/user.controller.mjs";


let userRouter = Router();

userRouter.post('/register', userController.REGISTER);
userRouter.get('/login',userController.LOGIN);



export default userRouter