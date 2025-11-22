import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['inquiry'],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Clear existing model to prevent enum validation errors
if (mongoose.models.Submission) {
  delete mongoose.models.Submission;
}

export default mongoose.model('Submission', SubmissionSchema);
