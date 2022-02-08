import IPLAYER_DATA from "./playerData.interface";
export interface INTERNAL_META {
    pubDateTime?: String;
    igorPath?: String;
    xslt?: String;
    xsltForceRecompile?: String;
    xsltInCache?: String;
    xsltCompileTimeMillis?: String;
    xsltTransformTimeMillis?: String;
    consolidatedDomKey?: String;
    endToEndTimeMillis?: String;
}
interface LEAGUES {
    standard: [IPLAYER_DATA];
    africa?: [IPLAYER_DATA];
    sacramento?: [IPLAYER_DATA];
    vegas?: [IPLAYER_DATA];
    utah?: [IPLAYER_DATA];
}
export default interface IALL_PLAYERS {
    _internal: INTERNAL_META;
    league: LEAGUES;
}
export {};
