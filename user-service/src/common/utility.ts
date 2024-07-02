import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "./constant";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied");
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.userId = (decoded as { userId: string }).userId;
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};
