import { CheerioAPI } from "cheerio";
import ScrapingStrategy from "./scraping-strategy.interface";

export const getStrategy = <T extends ScrapingStrategy<any>>(strategies: T[], query: string, $: CheerioAPI): T => {
    const strategy = strategies.find(strategy => strategy.appliesTo(query, $));
    if (!strategy) {
        throw new Error(`Strategy not found for query: ${query}`);
    }
    return strategy;
}