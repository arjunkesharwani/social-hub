import mongoose, { Document, Schema } from 'mongoose';

interface IDiscussion extends Document {
  userId: string;
  text: string;
  image?: string;
  hashtags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const DiscussionSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  image: { type: String },
  hashtags: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IDiscussion>('Discussion', DiscussionSchema);
