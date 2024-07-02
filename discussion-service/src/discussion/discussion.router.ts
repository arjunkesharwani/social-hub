import { Router } from "express";
import DiscussionController from "./discussion.controller";

const router = Router();

router.post("/", DiscussionController.createDiscussion);
router.put("/:discussionId", DiscussionController.updateDiscussion);
router.delete("/:discussionId", DiscussionController.deleteDiscussion);
router.get("/", DiscussionController.listDiscussions);
router.get("/tags", DiscussionController.getDiscussionsByTags);
router.get("/search", DiscussionController.getDiscussionsByText);
router.get("/:discussionId", DiscussionController.getDiscussion)

export default router;
