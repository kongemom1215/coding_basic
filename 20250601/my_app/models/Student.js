import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  age: Number,
  stickers: Number
});

export default mongoose.model('Student', studentSchema);