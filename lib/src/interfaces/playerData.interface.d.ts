interface TEAM_SITE {
    playerCode: String;
    posFull: String;
    displayAffiliation: String;
    freeAgentCode: String;
}
interface PLAYER_TEAM_INFO {
    teamId: String;
    seasonStart: String;
    seasonEnd: String;
}
interface PLAYER_DRAFT_INFO {
    teamId: String;
    pickNum: String;
    roundNum: String;
    seasonYear: String;
}
export default interface IPLAYER_DATA {
    firstName: String;
    lastName: String;
    temporaryDisplayName: String;
    personId: String;
    teamId: String;
    jersey: String;
    isActive: Boolean;
    pos: String;
    heightFeet: String;
    heightInches: String;
    heightMeters: String;
    weightPounds: String;
    weightKilograms: String;
    dateOfBirthUTC: String;
    teamSitesOnly: TEAM_SITE;
    teams: [PLAYER_TEAM_INFO];
    draft: PLAYER_DRAFT_INFO;
    nbaDebutYear: String;
    yearsPro: String;
    collegeName: String;
    lastAffiliation: String;
    country: String;
}
export {};
