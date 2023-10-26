const jwt = require("jsonwebtoken");
const UnauthenticatedError = require("../errors/unauthenticated");
const authMiddleware = (req, res, next) => {
  const token = req.cookies.aaccessToken;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.id) throw new UnauthenticatedError("unauthorized");
    req.user = decoded;
    next();
  } catch (error) {
    throw new UnauthenticatedError("JWT expired");
  }
  //   console.log(decoded);
};

module.exports = authMiddleware;
