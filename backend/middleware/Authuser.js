const jwt = require('jsonwebtoken');

const verifyUser = (req,res,next)=>{
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({status:401, message : "No token"})
  }else{
    jwt.verify(token, "secretKey", (err, decoded)=>{
      // console.log(decoded.name);
      if(err){
        return res.status(401).json({status:401, message:"Authentication Error" })
      }else{
        req.id = decoded.id;
        req.name = decoded.name;
        next();
      }
    })
  }
}

module.exports = { verifyUser };