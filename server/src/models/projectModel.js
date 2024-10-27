import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    imageUrl: {
      type: String,
    },
    gitRepo: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
