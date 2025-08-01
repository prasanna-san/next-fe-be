import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 150
  }
}, {
  timestamps: true
});

export default mongoose.models.User || mongoose.model('User', userSchema); 