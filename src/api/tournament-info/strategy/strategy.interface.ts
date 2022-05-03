import ScrapingStrategy from "../../strategy/scraping-strategy.interface";
import TournamentInfo from "../tournament-info.interface";

interface TournamentInfoScrapingStrategy extends ScrapingStrategy<TournamentInfo> { }

export default TournamentInfoScrapingStrategy;