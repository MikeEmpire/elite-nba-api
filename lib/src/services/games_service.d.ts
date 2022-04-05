import { Response, Request, NextFunction } from "express";
export declare const getTodaysGames: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export declare const gameTodaysGamesV2: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
declare type GameParams = {
    date: String;
    code: String;
};
export declare const getGameStats: (req: Request<{}, {}, {}, GameParams>, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export {};
