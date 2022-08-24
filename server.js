import express from "express";
import messageRouter from "./src/router/message.route.mjs";
import userRouter from "./src/router/user.router.mjs";
import fileUpload from "express-fileupload";
const PORT = process.env.PORT || 3000

const app = express();
app.use(fileUpload())
app.use(express.json());
app.use(userRouter)
app.use(messageRouter)



app.listen(PORT, console.log("server ready http://localhost:" + PORT))