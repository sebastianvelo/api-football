import { CheerioAPI } from "cheerio";
import TournamentInfo from "../../tournament-info.interface";
import TournamentInfoScrappingStrategy from "../strategy.interface";

class WikipediaInfoScrappingStrategy implements TournamentInfoScrappingStrategy {

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

export default WikipediaInfoScrappingStrategy;