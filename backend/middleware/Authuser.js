const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; // Ganti dengan kunci rahasia yang sama dengan di controller

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });

    req.user = user;
    next();
  });
}

const verifyUser = (req,res,next)=>{
  const token = req.cookies.token;
  if(!token){
    return res.json({message : "No token"})
  }else{
    jwt.verify(token, "secretKey", (err, decoded)=>{
      console.log(decoded.name);
      if(err){
        return res.json({message:"Authentication Error" })
      }else{
        req.name = decoded.name;
        next();
      }
    })
  }
}

module.exports = { authenticateToken, verifyUser };