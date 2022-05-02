import axios from "axios";
import * as cheerio from "cheerio";
import { logTitle } from "../../common/Logger";

export const getPage = async (query: string): Promise<cheerio.CheerioAPI> => {
    try {
        const page = `https://es.wikipedia.org/wiki/${query}`;
        logTitle(`Retrieve page: ${page}`);
        const { data } = await axios.get(page);
        return cheerio.load(data);
    } catch (e: any) {
        console.error(e.message)
        throw new Error(`${e.message} || Page not found: ${query}.`);
    }
};