import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import { Request, Response, NextFunction } from "express"
import { IUser } from "../models/UserModel.js";
import User from "../models/UserModel.js";
import FancyError from "../utils/FancyError.js"



interface JwtPayload {
    _id: string;
    iat: number;
}

declare module 'express-serve-static-core' {
    interface Request {
        user?: IUser;
    }
}

export const authMiddleware = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { loginToken } = req.cookies;
    try {
        const decode = jwt.verify(loginToken, process.env.SECRET_KEY as jwt.Secret) as JwtPayload
        const user = await User.findById(decode._id);
        
        if (user !== null) {
            req.user = user;
            next();
        }
    } catch (error) {
        console.log(error);
        
        throw new FancyError('not Authorized , please login again', 401)
    }
})

export const isAdmin = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.user as IUser
    const adminUser = await User.findOne({ email })
    if (adminUser?.role !== "admin") {
        throw new FancyError("You are not an admin", 401)
    } else {
        next();
    }
})

