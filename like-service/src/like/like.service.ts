import axios from "axios";
import Like from "./like.model";

class LikeService {
  async likeDiscussion(userId: string, discussionId: string) {
    const userResponse = await axios.get(
      `http://localhost:5000/${userId}`
    );
    const discussionResponse = await axios.get(
      `http://localhost:5001/${discussionId}`
    );

    if (!userResponse.data) {
      throw new Error("User not found");
    }

    if (!discussionResponse.data) {
      throw new Error("Discussion not found");
    }

    const like = await Like.create({ userId, discussionId });
    return like;
  }

  async unlikeDiscussion(userId: string, discussionId: string) {
    await Like.findOneAndDelete({ userId, discussionId });
  }

  async listLikesByDiscussion(discussionId: string) {
    const likes = await Like.find({ discussionId });
    return likes;
  }

  async likeComment(userId: string, commentId: string) {
    const userResponse = await axios.get(`http://localhost:5000/${userId}`);
    const commentResponse = await axios.get(`http://localhost:5002/${commentId}`);

    if (!userResponse.data) {
      throw new Error("User not found");
    }

    if (!commentResponse.data) {
      throw new Error("Comment not found");
    }

    const like = await Like.create({ userId, commentId });
    return like;
  }

  async unlikeComment(userId: string, commentId: string) {
    await Like.findOneAndDelete({ userId, commentId });
  }

}

export default new LikeService() as LikeService;
