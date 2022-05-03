import ScrapingStrategy from "../../../strategy/scraping-strategy.interface";
import TeamRow from "../team-row.interface";

interface TeamRowScrapingStrategy extends ScrapingStrategy<TeamRow[]> { }

export default TeamRowScrapingStrategy;