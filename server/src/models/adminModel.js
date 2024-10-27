import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  access_token_expiry,
  access_token_secret_key,
} from "../variables.js";

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dhw3jdygg/image/upload/v1728892043/user_nc3bad.svg",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  { timestamps: true }
);

// Pre-save middleware to hash password
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
  } catch (error) {
    next(error); // Pass error to the next middleware for proper error handling
  }
});

// Method to check if password is correct
adminSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Method to generate access token
adminSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    access_token_secret_key,
    { expiresIn: access_token_expiry }
  );
};

export const Admin = mongoose.model("Admin", adminSchema);
