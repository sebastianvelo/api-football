import { CheerioAPI } from "cheerio";

interface ScrappingStrategy<T> {
    apply: ($: CheerioAPI) => T;
    appliesTo: (query: string, $: CheerioAPI) => boolean;
}

export default ScrappingStrategy;