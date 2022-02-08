import { INTERNAL_META } from "./allPlayersResponse.interface";
import IPLAYER_STATS from "./playerStats.interface";

export default interface IPLAYER_STATS_RESPONSE {
  _internal: INTERNAL_META;
  league: IPLAYER_STATS;
}
