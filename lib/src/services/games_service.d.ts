import { Response, Request, NextFunction } from "express";
export declare const getTodaysGames: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
