import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/adminModel.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Project } from "../models/projectModel.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // Only secure in production
  sameSite: "strict",
};

const genAdminAccessToken = async (adminId) => {
  const admin = await Admin.findById(adminId);
  if (!admin) throw new ApiError(404, "Admin not found");

  const adminAccessToken = admin.generateAccessToken();
  return { adminAccessToken };
};

export const createAdmin = asyncHandler(async (req, res) => {
  const { fullName, username, email, avatar, password } = req.body;

  try {
    const admin = await Admin.create({
      fullName,
      username,
      email,
      avatar,
      password,
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "Admin created successfully", admin));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      status: error.statusCode || 500,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
});
export const loginAdmin = asyncHandler(async (req, res) => {
  const { login, password } = req.body;

  try {
    if (!login || !password) {
      throw new ApiError(400, "Username/Email and Password are required...!");
    }

    const admin = await Admin.findOne({
      $or: [{ username: login }, { email: login }],
    });

    if (!admin) {
      throw new ApiError(404, "Admin not registered...!");
    }

    const isPasswordValid = await admin.isPasswordCorrect(password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Wrong password...!");
    }

    if (admin.isBanned) {
      throw new ApiError(401, "Account is banned...!");
    }

    const { adminAccessToken } = await genAdminAccessToken(admin._id);
    const loggedAdmin = await Admin.findById(admin._id).select("-password");

    return res
      .status(200)
      .cookie("adminAccessToken", adminAccessToken, cookieOptions)
      .cookie("adminVerify", "AdminVerifier", cookieOptions)
      .json(new ApiResponse(200, "Admin logged in successfully", loggedAdmin));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      status: error.statusCode || 500,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
});
export const addProject = asyncHandler(async (req, res) => {
  const { title, category, description, gitRepo } = req.body;
  const image = req.file.path;
  try {
    if (!image) {
      throw new ApiError(400, "Image are required...!");
    }
    const project = await Project.create({
      title,
      category,
      description,
      gitRepo,
    });

    const projectImage = await uploadOnCloudinary(
      image,
      `Project_images/${project._id}`,
      "Project-demo"
    );

    const updatedProject = await Project.findByIdAndUpdate(
      project._id,
      { imageUrl: projectImage.secure_url },
      { new: true }
    );

    return res
      .status(200)
      .json(new ApiResponse(200, "Admin logged in successfully", updatedProject));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      status: error.statusCode || 500,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
});
