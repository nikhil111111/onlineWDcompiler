import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export interface AuthRequest extends Request {
    _id?: string;
}

export const verifyToken = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const token = req.cookies.token;

    console.log("Request cookies:", req.cookies);  // Check if token is being received


    if (!token) {
        console.log("No token found in cookies.");
        return res.status(401).send({ message: "You are unauthorized." });
    }

    jwt.verify(
        token,
        process.env.JWT_KEY!,
        (err: JsonWebTokenError | TokenExpiredError | null, data: any) => {
            if (err) {
                if (err instanceof TokenExpiredError) {
                    console.log("Token has expired.");
                    return res.status(401).send({ message: "Token has expired." });
                }
                console.log("Token verification error:", err.message);
                return res.status(401).send({ message: "You are unauthorized." });
            }
            req._id = data._id;
            console.log("Token verified, user ID:", req._id);
            next();
        }
    );
};
