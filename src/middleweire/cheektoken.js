import jwt from "jsonwebtoken";
const secret = "real"

function cheektoken(req, res, next) {
  try {
    let token = req.headers.token;
    console.log(token);
    if (!token) {
      throw new Error("required token")
    }
    
    token = jwt.verify(token, secret)
    let { userId, ip, agent } = token
    if (ip != req.ip || agent != req.headers["user-agent"]) {
      throw new Error("bilib qoldik a")
    }
    next()
  } catch (error) {
    res.status(401).json({
      status: 401,
      message: 'ok'
    })
  }
}


export default cheektoken