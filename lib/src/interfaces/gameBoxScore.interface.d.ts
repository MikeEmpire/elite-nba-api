import ACTIVE_PLAYER from "./activePlayer.interface";
import { GAME_INFO, INTERNAL_GAME_DATA_INTERFACE } from "./gameinfo.interface";
interface PREVIOUS_MATCHUP {
    gameId: String;
    gameDate: String;
}
interface TEAM_TOTAL_STATS {
    points: String;
    fgm: String;
    fga: String;
    fgp: String;
    ftm: String;
    fta: String;
    ftp: String;
    tpm: String;
    tpa: String;
    tpp: String;
    offReb: String;
    defReb: String;
    totReb: String;
    assists: String;
    pFouls: String;
    steals: String;
    turnovers: String;
    blocks: String;
    plusMinus: String;
    min: String;
    short_timeout_remaining: String;
    full_timeout_remaining: String;
    team_fouls: String;
}
interface BOX_SCORE_STAT_GAME_LEADER {
    personId: String;
    firstName: String;
    lastName: String;
}
interface STAT_GAME_LEADER {
    value: String;
    players: Array<BOX_SCORE_STAT_GAME_LEADER>;
}
interface STAT_GAME_LEADERS {
    points: STAT_GAME_LEADER;
    rebounds: STAT_GAME_LEADER;
    assists: STAT_GAME_LEADER;
}
interface TEAM_BOX_SCORE_STATS {
    fastbreakPoints: String;
    biggestLead: String;
    pointsInPaint: String;
    secondChancePoints: String;
    pointsOffTurnovers: String;
    longestRun: String;
    totals: TEAM_TOTAL_STATS;
    leaders: STAT_GAME_LEADERS;
}
interface BOX_SCORE_STATS {
    timesTied: String;
    leadChanges: String;
    hTeam: TEAM_BOX_SCORE_STATS;
    vTeam: TEAM_BOX_SCORE_STATS;
    activePlayers: Array<ACTIVE_PLAYER>;
}
export default interface GAME_BOX_SCORE {
    basicGameData: GAME_INFO;
    _internal: INTERNAL_GAME_DATA_INTERFACE;
    previousMatchup: PREVIOUS_MATCHUP;
    stats: BOX_SCORE_STATS;
}
export {};
