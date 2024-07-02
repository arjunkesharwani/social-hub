import { Router } from "express";
import proxy from "express-http-proxy";
import { addUserInfo, authenticate } from "../common/utility";

const router = Router();

router.use(
  "/users",
  (req, res, next) => {
    // Skip authentication for signup and login
    if (req.path === "/signup" || req.path === "/login") {
      return next();
    }
    authenticate(req, res, next);
  },
  proxy("http://localhost:5000", { proxyReqOptDecorator: addUserInfo })
);

// Discussion service routes
router.use(
  "/discussions",
  authenticate,
  proxy("http://localhost:5001", { proxyReqOptDecorator: addUserInfo })
);

// Comment service routes
router.use(
  "/comments",
  authenticate,
  proxy("http://localhost:5002", { proxyReqOptDecorator: addUserInfo })
);

// Like service routes
router.use(
  "/likes",
  authenticate,
  proxy("http://localhost:5003", { proxyReqOptDecorator: addUserInfo })
);

// Follow service routes
router.use(
  "/follows",
  authenticate,
  proxy("http://localhost:5004", { proxyReqOptDecorator: addUserInfo })
);

export default router;
