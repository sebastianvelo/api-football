import { CheerioAPI } from "cheerio";

interface ScrapingStrategy<T> {
    apply: ($: CheerioAPI) => T;
    appliesTo: (query: string, $: CheerioAPI) => boolean;
}

export default ScrapingStrategy;