import express from "express";
import userRouter from "./src/router/user.router.mjs";
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(userRouter)



app.listen(PORT, console.log("server ready http://localhost:" + PORT))