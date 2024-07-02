import { Router } from "express";
import userController from "./user.controller";

const router = Router();

router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);
router.get("/:userId", userController.getUser);
router.get("/search", userController.searchUserByName);
router.get("/", userController.listUsers);

export default router;
