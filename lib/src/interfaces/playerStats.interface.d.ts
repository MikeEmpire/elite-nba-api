interface PLAYER_REGULAR_TEAM_TOTAL_STATS {
    ppg: String;
    rpg: String;
    apg: String;
    mpg: String;
    topg: String;
    spg: String;
    bpg: String;
    tpp: String;
    ftp: String;
    fgp: String;
    assists: String;
    blocks: String;
    steals: String;
    turnovers: String;
    offReb: String;
    defReb: String;
    totReb: String;
    fgm: String;
    fga: String;
    tpm: String;
    tpa: String;
    ftm: String;
    fta: String;
    pFouls: String;
    points: String;
    gamesPlayed: String;
    gamesStarted: String;
    plusMinus: String;
    min: String;
    dd2: String;
    td3: String;
}
interface PLAYER_REGULAR_TEAM_STATS {
    teamId: String;
    ppg: String;
    rpg: String;
    apg: String;
    mpg: String;
    topg: String;
    spg: String;
    bpg: String;
    tpp: String;
    ftp: String;
    fgp: String;
    assists: String;
    blocks: String;
    steals: String;
    turnovers: String;
    offReb: String;
    defReb: String;
    totReb: String;
    fgm: String;
    fga: String;
    tpm: String;
    tpa: String;
    ftm: String;
    fta: String;
    pFouls: String;
    points: String;
    gamesPlayed: String;
    gamesStarted: String;
    plusMinus: String;
    min: String;
    dd2: String;
    td3: String;
}
interface IREGULAR_SEASON_STATS {
    seasonYear: Number;
    teams: [PLAYER_REGULAR_TEAM_STATS];
    total: [PLAYER_REGULAR_TEAM_TOTAL_STATS];
}
interface REGULAR_SEASON {
    season: [IREGULAR_SEASON_STATS];
}
interface CAREER_STATS {
    tpp: String;
    ftp: String;
    fgp: String;
    ppg: String;
    rpg: String;
    apg: String;
    bpg: String;
    mpg: String;
    spg: String;
    assists: String;
    blocks: String;
    steals: String;
    turnovers: String;
    offReb: String;
    defReb: String;
    totReb: String;
    fgm: String;
    fga: String;
    tpm: String;
    tpa: String;
    ftm: String;
    fta: String;
    pFouls: String;
    points: String;
    gamesPlayed: String;
    gamesStarted: String;
    plusMinus: String;
    min: String;
    dd2: String;
    td3: String;
}
interface LATEST_STATS {
    seasonYear: Number;
    seasonStageId: Number;
    ppg: String;
    rpg: String;
    apg: String;
    mpg: String;
    topg: String;
    spg: String;
    bpg: String;
    tpp: String;
    ftp: String;
    fgp: String;
    assists: String;
    blocks: String;
    steals: String;
    turnovers: String;
    offReb: String;
    defReb: String;
    totReb: String;
    fgm: String;
    fga: String;
    tpm: String;
    tpa: String;
    ftm: String;
    fta: String;
    pFouls: String;
    points: String;
    gamesPlayed: String;
    gamesStarted: String;
    plusMinus: String;
    min: String;
    dd2: String;
    td3: String;
}
export default interface PLAYER_STATS {
    latest: LATEST_STATS;
    careerSummary: CAREER_STATS;
    regularSeason: REGULAR_SEASON;
}
export {};
