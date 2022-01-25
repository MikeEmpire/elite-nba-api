import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";
export declare const errorHandler: (error: HttpException, request: Request, response: Response, next: NextFunction) => Response<any, Record<string, any>>;
