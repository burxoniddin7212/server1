import { Router } from "express";


let messageRouter = Router();

messageRouter.post('/message', messageController.POST);




export default messageRouter