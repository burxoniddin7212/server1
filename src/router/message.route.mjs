import { Router } from "express";
import messageController from "../controller/message.controller.mjs";


let messageRouter = Router();

messageRouter.post('/message', messageController.POST);




export default messageRouter