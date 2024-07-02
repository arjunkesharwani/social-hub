import axios from "axios";
import Comment from "./comment.model";

class CommentService {
  async createComment(userId: string, discussionId: string, text: string) {
    const userResponse = await axios.get(`http://localhost:5000/${userId}`);
    const discussionResponse = await axios.get(
      `http://localhost:5001/${discussionId}`
    );

    if (!userResponse.data) {
      throw new Error("User not found");
    }

    if (!discussionResponse.data) {
      throw new Error("Discussion not found");
    }

    const comment = await Comment.create({ userId, discussionId, text });
    return comment;
  }

  async updateComment(commentId: string, updates: any) {
    updates.updatedAt = new Date();
    const comment = await Comment.findByIdAndUpdate(commentId, updates, {
      new: true,
    });
    return comment;
  }

  async deleteComment(commentId: string) {
    await Comment.findByIdAndDelete(commentId);
  }

  async listCommentsByDiscussion(discussionId: string) {
    const comments = await Comment.find({ discussionId });
    return comments;
  }

  async addReplyToComment(commentId: string, userId: string, text: string) {
    const comment = await Comment.findById(commentId);
    if (!comment) throw new Error("Comment not found");

    const reply = await Comment.create({ userId, commentId, text });
    return reply;
  }
}

export default new CommentService() as CommentService;
