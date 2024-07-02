import { Router } from "express";
import LikesController from "./like.controller";

const router = Router();

router.post("/like", LikesController.likeDiscussion);
router.delete("/unlike", LikesController.unlikeDiscussion);
router.get("/likes/:discussionId", LikesController.listLikesByDiscussion);
router.post("/comments/like", LikesController.likeComment);
router.delete("/comments/unlike", LikesController.unlikeComment);

export default router;
