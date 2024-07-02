import axios from "axios";
import Discussion from "./discussion.model";

class DiscussionService {
  async createDiscussion(
    userId: string,
    text: string,
    image: string,
    hashtags: string[]
  ) {
    const userResponse = await axios.get(
      `http://localhost:5000/${userId}`
    );
    if (!userResponse.data) {
      throw new Error("User not found");
    }

    const discussion = new Discussion({ userId, text, image, hashtags });
    await discussion.save();
    return discussion;
  }

  async updateDiscussion(discussionId: string, updates: any) {
    updates.updatedAt = new Date();
    const discussion = await Discussion.findByIdAndUpdate(
      discussionId,
      updates,
      { new: true }
    );
    return discussion;
  }

  async deleteDiscussion(discussionId: string) {
    await Discussion.findByIdAndDelete(discussionId);
  }

  async listDiscussions() {
    const discussions = await Discussion.find();
    return discussions;
  }

  async getDiscussionsByTags(tags: string[]) {
    const discussions = await Discussion.find({ hashtags: { $in: tags } });
    return discussions;
  }

  async getDiscussionsByText(text: string) {
    const discussions = await Discussion.find({ text: new RegExp(text, "i") });
    return discussions;
  }

  async getDiscussion(discussionId: string) {
    const discussion = await Discussion.findById(discussionId);
    return discussion;
  }
}

export default new DiscussionService() as DiscussionService;
