import mongoose, { Document, Schema } from "mongoose";

interface ILike extends Document {
  userId: string;
  discussionId?: string;
  commentId?: string;
  createdAt: Date;
}

const LikeSchema: Schema = new Schema({
  userId: { type: String, required: true },
  discussionId: { type: String },
  commentId: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ILike>("Like", LikeSchema);
