interface META_SCHEDULE_RESPONSE {
    version: Number;
    request: String;
    time: String;
    code: Number;
}
interface NBA_GAME_ODDS {
    team: Number | null;
    odds: Number | null;
    suspended: Number | null;
}
interface NBA_GAME_PERIODS {
    period: Number;
    periodType: String;
    score: Number;
}
interface NBA_GAME_LEADER {
    personId: Number;
    name: String;
    jerseyNum: String;
    position: String;
    teamTricode: String;
    playerSlug: String;
    points: Number;
    rebounds: Number;
    assists: Number;
}
interface INBA_GAME_LEADER_DATA {
    homeLeaders: NBA_GAME_LEADER;
    awayLeaders: NBA_GAME_LEADER;
}
interface GAME_SCHEDULE_TEAM {
    teamId: Number;
    teamName: String;
    teamCity: String;
    wins: Number;
    losses: Number;
    score: Number;
    seed: Number | null;
    inBonus: String;
    timeoutsRemaining: Number;
    periods: [NBA_GAME_PERIODS];
}
interface NBA_GAME_DATA {
    gameId: String;
    gameCode: String;
    gameStatus: Number;
    period: Number;
    gameClock: String;
    gameTimeUTC: String;
    gameEt: String;
    regulationPeriods: Number;
    ifNecessary: Boolean;
    seriesGameNumber: String;
    seriesText: String;
    homeTeam: GAME_SCHEDULE_TEAM;
    awayTeam: GAME_SCHEDULE_TEAM;
    gameLeaders: INBA_GAME_LEADER_DATA;
    pbOdds: NBA_GAME_ODDS;
}
interface SCOREBOARD {
    gameDate: String;
    leagueId: String;
    leagueName: String;
    games: [NBA_GAME_DATA];
}
export default interface SCHEDULE_RESPONSE {
    meta: META_SCHEDULE_RESPONSE;
    scoreboard: SCOREBOARD;
}
export {};
