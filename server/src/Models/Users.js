import mongoose, { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedRecepies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'recepies',
    },
  ],
});

export const UserModel = mongoose.model('users', UserSchema);
