import { Request, Response } from "express";
import FollowService from "./follow.service";

class FollowsController {
  async followUser(req: Request, res: Response) {
    const { followerId, followeeId } = req.body;

    try {
      const follow = await FollowService.followUser(followerId, followeeId);
      res.status(201).send(follow);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async unfollowUser(req: Request, res: Response) {
    const { followerId, followeeId } = req.body;

    try {
      await FollowService.unfollowUser(followerId, followeeId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async listFollowers(req: Request, res: Response) {
    const { userId } = req.params;

    try {
      const followers = await FollowService.listFollowers(userId);
      res.send(followers);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async listFollowing(req: Request, res: Response) {
    const { userId } = req.params;

    try {
      const following = await FollowService.listFollowing(userId);
      res.send(following);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new FollowsController() as FollowsController;
