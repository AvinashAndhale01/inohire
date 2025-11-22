import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
  calendlyUrl: {
    type: String,
    required: true,
    default: 'https://calendly.com/inohire78/30min',
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Settings || mongoose.model('Settings', SettingsSchema);
