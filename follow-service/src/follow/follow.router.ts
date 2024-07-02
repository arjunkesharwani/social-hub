import { Router } from "express";
import FollowsController from "./follow.controller";

const router = Router();

router.post("/follow", FollowsController.followUser);
router.delete("/unfollow", FollowsController.unfollowUser);
router.get("/followers/:userId", FollowsController.listFollowers);
router.get("/following/:userId", FollowsController.listFollowing);

export default router;
