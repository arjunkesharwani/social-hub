import { Request, Response } from "express";
import CommentService from "./comment.service";

class CommentsController {
  async createComment(req: Request, res: Response) {
    const { userId, discussionId, text } = req.body;

    try {
      const comment = await CommentService.createComment(
        userId,
        discussionId,
        text
      );
      res.status(201).send(comment);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateComment(req: Request, res: Response) {
    const { commentId } = req.params;
    const updates = req.body;

    try {
      const comment = await CommentService.updateComment(commentId, updates);
      res.send(comment);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deleteComment(req: Request, res: Response) {
    const { commentId } = req.params;

    try {
      await CommentService.deleteComment(commentId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async listCommentsByDiscussion(req: Request, res: Response) {
    const { discussionId } = req.params;

    try {
      const comments = await CommentService.listCommentsByDiscussion(
        discussionId
      );
      res.send(comments);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async addReplyToComment(req: Request, res: Response) {
    const { commentId } = req.params;
    const { userId, text } = req.body;

    try {
      const comment = await CommentService.addReplyToComment(
        commentId,
        userId,
        text
      );
      res.status(201).send(comment);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new CommentsController() as CommentsController;
