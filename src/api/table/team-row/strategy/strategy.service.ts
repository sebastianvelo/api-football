import { CheerioAPI } from "cheerio";
import * as ScrapingStrategyService from "../../../strategy/scraping-strategy.service";
import SortableTableScrapingStrategy from "./impl/SortableTableScrapingStrategy";
import StaticTableScrapingStrategy from "./impl/StaticTableScrapingStrategy";
import TeamRowScrapingStrategy from "./strategy.interface";

const strategies: TeamRowScrapingStrategy[] = [
    new StaticTableScrapingStrategy(),
    new SortableTableScrapingStrategy()
];

export const getStrategy = (query: string, $: CheerioAPI) => ScrapingStrategyService.getStrategy(strategies, query, $);