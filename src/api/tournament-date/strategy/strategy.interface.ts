import ScrappingStrategy from "../../strategy/scrapping-strategy.interface";
import TournamentDate from "../tournament-date.interface";

interface TournamentDateScrappingStrategy extends ScrappingStrategy<TournamentDate[]> { }

export default TournamentDateScrappingStrategy;