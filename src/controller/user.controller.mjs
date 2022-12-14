import fs from "fs";
import path from "path";
import sha256 from "sha256";
import jwt from "jsonwebtoken"

const secret = "real";

let userController = {

  GET: (req, res) => {
    let users = fs.readFileSync(path.join(process.cwd(), 'database', 'db.users.json'), "utf-8");
    users = JSON.parse(users)
    let message = fs.readFileSync(path.join(process.cwd(), 'database', 'db.massages.json'), "utf-8");
    message = JSON.parse(message)
    res.status(200).json({
      users:users,
      message:message
    })
  },

  REGISTER: (req, res) => {
    try {
      let { username, password, email } = req.body;
      console.log(req.files);
      if (username && password && email) {
        let users = fs.readFileSync(path.join(process.cwd(), 'database', 'db.users.json'), "utf-8");
        users = JSON.parse(users)
        let newUser = {
          userId: users.at(-1)?.userId + 1 || 1,
          username,
          password: sha256(password),
          email
        }
        users.push(newUser)
        fs.writeFileSync(path.join(process.cwd(), 'database', 'db.users.json'), JSON.stringify(users, null, 4))
      //  img.mv('/')
        res.status(200).json({
          status: 200,
          message: "you are register",
          data: newUser,
          token: jwt.sign({ userId: newUser.userId, ip: req.ip, agent: req.headers["user-agent"] }, secret)
        })
      } else {
        throw new Error("invalid username or password or email")
      }
    } catch (error) {

      res.status(401).json({
        status: 401,
        message: error.message
      })

    }
  },

  LOGIN: (req, res) => {
    try {

      let { username, password, email } = req.body;
      if (username && password && email) {
        let users = fs.readFileSync(path.join(process.cwd(), 'database', 'db.users.json'), "utf-8");
        users = JSON.parse(users);
        let user = users.find(user => user.username == username && user.password == sha256(password) && user.email == email)
        if (user) {
          return res.status(200).json({
            status: 200,
            message: "ok",
            token: jwt.sign({ userId: user.userId, ip: req.ip, agent: req.headers["user-agent"] }, secret)
          })
        }
      } else { throw new Error("username or password invalid") }
    } catch (error) {
      res.status(200).json({
        status: 401,
        message: error.message
      })
    }
  }
}


export default userController 