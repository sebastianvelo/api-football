import ScrappingStrategy from "../../strategy/scrapping-strategy.interface";
import TournamentInfo from "../tournament-info.interface";

interface TournamentInfoScrappingStrategy extends ScrappingStrategy<TournamentInfo> { }

export default TournamentInfoScrappingStrategy;