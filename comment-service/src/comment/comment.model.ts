import mongoose, { Document, Schema } from "mongoose";

interface IComment extends Document {
  userId: string;
  discussionId?: string;
  commentId?: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}


const CommentSchema: Schema = new Schema({
  userId: { type: String, required: true },
  discussionId: { type: String },
  commentId: {type: String},
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IComment>("Comment", CommentSchema);
