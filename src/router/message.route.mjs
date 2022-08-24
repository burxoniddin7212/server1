import { Router } from "express";


let messageRouter = Router();

messageRouter.post('/message', messageController.POST);
// messageRouter.get('/login',userController.LOGIN);



export default messageRouter