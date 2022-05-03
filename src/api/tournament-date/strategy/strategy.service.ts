import { CheerioAPI } from "cheerio";
import * as ScrapingStrategyService from "../../strategy/scraping-strategy.service";
import CollapsibleTableScrapingStrategy from "./impl/CollapsibleTableScrapingStrategy";
import TournamentDateScrapingStrategy from "./strategy.interface";

const strategies: TournamentDateScrapingStrategy[] = [
    new CollapsibleTableScrapingStrategy()
];

export const getStrategy = (query: string, $: CheerioAPI) => ScrapingStrategyService.getStrategy(strategies, query, $);