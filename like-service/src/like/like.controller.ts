import { Request, Response } from 'express';
import LikeService from './like.service';

class LikesController {
  async likeDiscussion(req: Request, res: Response) {
    const { userId, discussionId } = req.body;

    try {
      const like = await LikeService.likeDiscussion(userId, discussionId);
      res.status(201).send(like);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async unlikeDiscussion(req: Request, res: Response) {
    const { userId, discussionId } = req.body;

    try {
      await LikeService.unlikeDiscussion(userId, discussionId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async listLikesByDiscussion(req: Request, res: Response) {
    const { discussionId } = req.params;

    try {
      const likes = await LikeService.listLikesByDiscussion(discussionId);
      res.send(likes);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async likeComment(req: Request, res: Response) {
    const { userId, commentId } = req.body;

    try {
      const like = await LikeService.likeComment(userId, commentId);
      res.status(201).send(like);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async unlikeComment(req: Request, res: Response) {
    const { userId, commentId } = req.body;

    try {
      await LikeService.unlikeComment(userId, commentId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new LikesController() as LikesController;
