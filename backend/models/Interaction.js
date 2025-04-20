import mongoose from 'mongoose';

const interactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  videoId: { type: String, required: true },
  liked: { type: Boolean, default: false },
  rating: { type: Number, min: 0, max: 5 },
  comment: { type: String, maxlength: 256 },
}, { timestamps: true });

export default mongoose.model('Interaction', interactionSchema);
