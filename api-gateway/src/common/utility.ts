import jwt from "jsonwebtoken";
import { RequestOptions } from "http";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET, excludedPaths } from "./constant";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (excludedPaths.includes(req.path)) {
    next();
    return;
  }
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).send("Access denied");
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
      email: string;
    };
    req.body.user = {
      userId: decoded.userId,
      email: decoded.email,
    };
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};

export const addUserInfo = (proxyReqOpts: RequestOptions, srcReq: Request) => {
  const user = srcReq.body.user;
  if (user) {
    proxyReqOpts.headers = {
      ...proxyReqOpts.headers,
      "x-user-id": user?.userId,
      "x-user-email": user?.email,
    };
  }
  return proxyReqOpts;
};
