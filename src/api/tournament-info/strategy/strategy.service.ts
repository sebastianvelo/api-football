import { CheerioAPI } from "cheerio";
import * as ScrappingStrategyService from "../../strategy/scrapping-strategy.service";
import WikipediaInfoScrappingStrategy from "./impl/WikipediaInfoScrappingStrategy";
import TournamentInfoScrappingStrategy from "./strategy.interface";

const strategies: TournamentInfoScrappingStrategy[] = [
    new WikipediaInfoScrappingStrategy()
];

export const getStrategy = (query: string, $: CheerioAPI) => ScrappingStrategyService.getScrappingStrategy(strategies, query, $);