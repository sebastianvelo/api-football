import { CheerioAPI } from "cheerio";
import * as ScrappingStrategyService from "../../../strategy/scrapping-strategy.service";
import WikipediaSortableScrappingStrategy from "./impl/WikipediaSortableScrappingStrategy";
import WikipediaStaticScrappingStrategy from "./impl/WikipediaStaticScrappingStrategy";
import TeamRowScrappingStrategy from "./strategy.interface";

const strategies: TeamRowScrappingStrategy[] = [
    new WikipediaStaticScrappingStrategy(),
    new WikipediaSortableScrappingStrategy()
];

export const getStrategy = (query: string, $: CheerioAPI) => ScrappingStrategyService.getScrappingStrategy(strategies, query, $);