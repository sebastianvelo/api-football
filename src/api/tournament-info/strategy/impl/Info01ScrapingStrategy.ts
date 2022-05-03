import { CheerioAPI } from "cheerio";
import TournamentInfo from "../../tournament-info.interface";
import TournamentInfoScrapingStrategy from "../strategy.interface";

class Info01ScrapingStrategy implements TournamentInfoScrapingStrategy {

    apply: ($: CheerioAPI) => TournamentInfo = ($: CheerioAPI) => {
        const ths = $('th');
        const startDate = ths.filter(function () { return $(this).text() === "Fecha de inicio"; }).next().text().replace("\n", "");
        const endDate = ths.filter(function () { return $(this).text() === "Fecha de cierre"; }).next().text().replace("\n", "");
        return {
            startDate, endDate
        };
    };

    appliesTo = (_: string, $: CheerioAPI): boolean => {
        return true;
    };
};

export default Info01ScrapingStrategy;