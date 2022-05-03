import { CheerioAPI } from "cheerio";
import * as ScrapingStrategyService from "../../strategy/scraping-strategy.service";
import Info01ScrapingStrategy from "./impl/Info01ScrapingStrategy";
import TournamentInfoScrapingStrategy from "./strategy.interface";

const strategies: TournamentInfoScrapingStrategy[] = [
    new Info01ScrapingStrategy()
];

export const getStrategy = (query: string, $: CheerioAPI) => ScrapingStrategyService.getStrategy(strategies, query, $);