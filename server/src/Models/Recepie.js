import mongoose from 'mongoose';

const RecepieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, requierd: true },
  imageUrl: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', 
    requierd: true,
  },
});

export const RecepieModel = mongoose.model('recepies', RecepieSchema);
