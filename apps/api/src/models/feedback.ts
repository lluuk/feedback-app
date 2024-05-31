import mongoose from 'mongoose';
import { type IFeedback, FeedbackTypeEnum } from 'types';

const feedbackSchema = new mongoose.Schema<IFeedback>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  type: { type: String, enum: FeedbackTypeEnum, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Feedback = mongoose.model('Feedback', feedbackSchema);
