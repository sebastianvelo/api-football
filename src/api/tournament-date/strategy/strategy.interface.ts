import ScrapingStrategy from "../../strategy/scraping-strategy.interface";
import TournamentDate from "../tournament-date.interface";

interface TournamentDateScrapingStrategy extends ScrapingStrategy<TournamentDate[]> { }

export default TournamentDateScrapingStrategy;