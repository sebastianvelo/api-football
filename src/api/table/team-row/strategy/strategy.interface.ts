import ScrappingStrategy from "../../../strategy/scrapping-strategy.interface";
import TeamRow from "../team-row.interface";

interface TeamRowScrappingStrategy extends ScrappingStrategy<TeamRow[]> { }

export default TeamRowScrappingStrategy;