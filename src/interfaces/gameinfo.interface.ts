interface ARENA {
  name: String;
  isDomestic: Boolean;
  city: String;
  stateAbbr: String;
  country: String;
}
interface TICKET {
  mobileApp: String;
  desktopWeb: String;
  mobileWeb: String;
  leagGameInfo: String;
  leagTix: String;
}
interface NUGGET {
  text: String;
}
interface GAME_DURATION {
  hours: String;
  minutes: String;
}
interface PERIOD {
  current: Number;
  type: Number;
  maxRegular: Number;
  isHalftime: Boolean;
  isEndOfPeriod: Boolean;
}

interface BROADCAST_STREAM {
  language?: String;
  isOnAir?: Boolean;
  streamId?: String;
}
interface TEAM_ADDITIONAL_INFO {
  nickname: String;
  fullName: String;
  confName: String;
}
interface TEAM {
  teamId: String;
  triCode: String;
  win: String;
  loss: String;
  seriesWin: String;
  seriesLoss: String;
  score: String;
  additionalInfo?: TEAM_ADDITIONAL_INFO;
  linescore: Array<any>;
}

interface STREAM {
  streamType: String;
  isOnAir: Boolean;
  doesArchiveExist: Boolean;
  isArchiveAvailToWatch: Boolean;
  streamId: String;
  duration: Number;
}

interface BROADCAST_TEAM {
  shortName: String;
  longName: String;
}

interface BROADCAST_NATIONAL_AUDIO {
  streams: Array<BROADCAST_STREAM>;
  broadcasters: Array<BROADCAST_TEAM>;
}

interface BROADCAST_AUDIO {
  national: BROADCAST_NATIONAL_AUDIO;
  vTeam: BROADCAST_NATIONAL_AUDIO;
  hTeam: BROADCAST_NATIONAL_AUDIO;
}

interface BROADCAST_VIDEO {
  regionalBlackoutCodes: String;
  canPurchase: Boolean;
  isLeaguePass: Boolean;
  isNationalBlackout: Boolean;
  isTNTOT: Boolean;
  isVR: Boolean;
  tntotIsOnAir: Boolean;
  isNextVR: Boolean;
  isNBAOnTNTVR: Boolean;
  isMagicLeap: Boolean;
  isOculusVenues: Boolean;
  streams: Array<STREAM>;
  deepLink: Array<any>;
}

interface BROADCASTER {
  national: Array<any>;
  canadian: Array<any>;
  vTeam: Array<BROADCAST_TEAM>;
  hTeam: Array<BROADCAST_TEAM>;
  spanish_hTeam: Array<any>;
  spanish_vTeam: Array<any>;
  spanish_national: Array<any>;
}

interface BROADCAST {
  broadcasters: BROADCASTER;
  video: BROADCAST_VIDEO;
  audio: BROADCAST_AUDIO;
}

interface WATCH {
  broadcast: BROADCAST;
}

export interface GAME_INFO {
  seasonStageId: Number;
  seasonYear: String;
  leagueName: String;
  gameId: String;
  arena: ARENA;
  isGameActivated: Boolean;
  statusNum: Number;
  extendedStatusNum: Number;
  startTimeEastern: String;
  startTimeUTC: String;
  startDateEastern: String;
  homeStartDate: String;
  homeStartTime: String;
  visitorStartDate: String;
  visitorStartTime: String;
  gameUrlCode: String;
  clock: String;
  isBuzzerBeater: Boolean;
  isPreviewArticleAvail: Boolean;
  isRecapArticleAvail: Boolean;
  nugget: NUGGET;
  attendance: String;
  tickets: TICKET;
  hasGameBookPdf: Boolean;
  isStartTimeTBD: Boolean;
  isNeutralVenue: Boolean;
  gameDuration: GAME_DURATION;
  period: PERIOD;
  vTeam: TEAM;
  hTeam: TEAM;
  watch: WATCH;
}

export interface INTERNAL_GAME_DATA_INTERFACE {
  pubDateTime: String;
  igorPath: String;
  xslt: String;
  routeName?: String;
  routeValue?: String;
  xsltForceRecompile?: String;
  xsltInCache?: String;
  xsltCompileTimeMillis?: String;
  xsltTransformTimeMillis?: String;
  consolidatedDomKey?: String;
  endToEndTimeMillis?: String;
  eventName?: String;
}

export default interface IGAME_DATA {
  numGames: Number;
  _internal?: INTERNAL_GAME_DATA_INTERFACE;
  games: Array<GAME_INFO>;
}
