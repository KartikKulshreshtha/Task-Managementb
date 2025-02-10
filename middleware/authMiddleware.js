import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  console.log(req.headers.authorization)
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    req.user = jwt.verify(token, "taskmanagement");
    next();
  } catch {
    res.status(403).json({ error: "Invalid token" });
  }
};
