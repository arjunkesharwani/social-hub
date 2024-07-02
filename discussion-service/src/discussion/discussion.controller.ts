import { Request, Response } from "express";
import DiscussionService from "./discussion.service";
import discussionService from "./discussion.service";

class DiscussionsController {
  async createDiscussion(req: Request, res: Response) {
    const { userId, text, image, hashtags } = req.body;

    try {
      const discussion = await DiscussionService.createDiscussion(
        userId,
        text,
        image,
        hashtags
      );
      res.status(201).send(discussion);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateDiscussion(req: Request, res: Response) {
    const { discussionId } = req.params;
    const updates = req.body;

    try {
      const discussion = await DiscussionService.updateDiscussion(
        discussionId,
        updates
      );
      res.send(discussion);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async deleteDiscussion(req: Request, res: Response) {
    const { discussionId } = req.params;

    try {
      await DiscussionService.deleteDiscussion(discussionId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async listDiscussions(req: Request, res: Response) {
    try {
      const discussions = await DiscussionService.listDiscussions();
      res.send(discussions);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getDiscussionsByTags(req: Request, res: Response) {
    const { tags } = req.query;
    const searchByTag = JSON.parse(tags as string);
    try {
      const discussions = await DiscussionService.getDiscussionsByTags(
        searchByTag
      );
      res.send(discussions);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getDiscussionsByText(req: Request, res: Response) {
    const { text } = req.query as { text: string };
    console.log(text)
    try {
      const discussions = await DiscussionService.getDiscussionsByText(text);
      res.send(discussions);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getDiscussion(req: Request, res: Response) {
    try {
      const { discussionId } = req.params;
      const discussion = await discussionService.getDiscussion(discussionId);
      res.send(discussion);
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default new DiscussionsController() as DiscussionsController;
