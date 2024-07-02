import { Router } from "express";
import CommentController from "./comment.controller";

const router = Router();

router.post("/", CommentController.createComment);
router.put("/:commentId", CommentController.updateComment);
router.delete("/:commentId", CommentController.deleteComment);
router.get("/:discussionId", CommentController.listCommentsByDiscussion);
router.post("/:commentId/reply", CommentController.addReplyToComment);

export default router;
