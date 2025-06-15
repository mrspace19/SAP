import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // <-- this transforms it
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      enum: ['student', 'alumni'],
      required: true,
    },
    year: {
      type: Number,
      required: true,
      min: 2008,
    },
    branch: {
      type: String,
      enum: ['Engineering', 'BCA', 'Pharmacy', 'Nursing'],
      required: true,
    },
    bio: {
      type: String,
      maxlength: 200,
    },
    avatar: {
      type: String, // URL to profile pic
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt
);

const User = mongoose.model('User', userSchema);

export default User;
