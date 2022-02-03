import { Request, Response, NextFunction } from "express";
export declare const getPlayerSeasonAverage: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export declare const getAllPlayers: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
