import jwt from 'jsonwebtoken';

import { asyncHandler } from '../utils/asyncHandler.js';
import { Admin } from '../models/adminModel.js';
import { access_token_secret_key } from '../variables.js';
import { ApiError } from '../utils/apiError.js';

export const verifyAdminJWT = asyncHandler(async (req, res, next)=>{
    try {
        const Token = req.cookies?.adminAccessToken || req.header('Authorization')?.replace('Bearer','');
        if(!Token){
            throw new ApiError(401, 'Unauthorized user, please login first...!')
        }
    
        const decoded = jwt.verify(Token, access_token_secret_key);
        const admin = await Admin.findById(decoded._id).select('-password');
        if(!admin){
            throw new ApiError(401, 'Session expired..!')
        }
        if(admin.role !== "admin"){
            throw new ApiError(401, 'You are not an admin..!')
        }
    
        req.admin = admin;
        next();
    } catch (error) {
        return res.status(error.statusCode || 500).json({status: error.statusCode, success:false, message: error.message})
    }
})