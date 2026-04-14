import jwt from "jsonwebtoken";
import User from "../models/User.js";

// PROTECT ROUTES
export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      return res.status(401).json({ msg: "Not authorized" });
    }
  } else{
    return res.status(401).json({ msg: "No token provided"});
  }  
};

// ADMIN ONLY
export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ msg: "Admin access only" });
  }
};