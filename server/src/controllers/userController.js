import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Project } from "../models/projectModel.js";


export const allProjects = asyncHandler(async (_req, res) => {
  try {
    const projects = await Project.find()

    return res
      .status(200)
      .json(new ApiResponse(200, "Project loaded successfully", projects));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      status: error.statusCode || 500,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
});
export const deleteProject = asyncHandler(async (req, res) => {
  const {_id} = req.params;
  try {
    const project = await Project.findByIdAndDelete(_id);

    return res
      .status(200)
      .json(new ApiResponse(200, "Project deleted successfully", project));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      status: error.statusCode || 500,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
});
export const updateProject = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find()

    return res
      .status(200)
      .json(new ApiResponse(200, "Project loaded successfully", projects));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      status: error.statusCode || 500,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
});
