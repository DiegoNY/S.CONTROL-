import { NextFunction } from "express"

interface route {
    err?: any
    req: Request,
    res: Response,
    next?: NextFunction
}