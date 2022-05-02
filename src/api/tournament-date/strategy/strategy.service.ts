import { CheerioAPI } from "cheerio";
import * as ScrappingStrategyService from "../../strategy/scrapping-strategy.service";
import WikipediaCollapsibleTableScrappingStrategy from "./impl/WikipediaCollapsibleTableScrappingStrategy";
import TournamentDateScrappingStrategy from "./strategy.interface";

const strategies: TournamentDateScrappingStrategy[] = [
    new WikipediaCollapsibleTableScrappingStrategy()
];

export const getStrategy = (query: string, $: CheerioAPI) => ScrappingStrategyService.getScrappingStrategy(strategies, query, $);