import mongoose, { Document, Schema } from "mongoose";

interface IFollow extends Document {
  followerId: string;
  followeeId: string;
  createdAt: Date;
}

const FollowSchema: Schema = new Schema({
  followerId: { type: String, required: true },
  followeeId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IFollow>("Follow", FollowSchema);
