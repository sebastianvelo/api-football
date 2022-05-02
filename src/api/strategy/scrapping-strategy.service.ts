import { CheerioAPI } from "cheerio";
import ScrappingStrategy from "./scrapping-strategy.interface";

export const getScrappingStrategy = <T extends ScrappingStrategy<any>>(strategies: T[], query: string, $: CheerioAPI): T => {
    const strategy = strategies.find(strategy => strategy.appliesTo(query, $));
    if (!strategy) {
        throw new Error(`Strategy not found for query: ${query}`);
    }
    return strategy;
}