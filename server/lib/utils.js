import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
  return token;
};