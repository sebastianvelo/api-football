import { CheerioAPI } from "cheerio";
import { logInfo, logSubtitle } from "../../../../common/Logger";
import { MatchResponse } from "../../../match/match.interface";
import * as MatchService from "../../../match/match.service";
import TournamentDate from "../../tournament-date.interface";
import TournamentDateScrappingStrategy from "../strategy.interface";

class WikipediaCollapsibleTableScrappingStrategy implements TournamentDateScrappingStrategy {

    private static getDate = (idx: number, matches: MatchResponse[]): TournamentDate => ({
        idx,
        matches: MatchService.getMatches(matches)
    });

    private static fixMatch = (match: MatchResponse, dateHour: any) => {
        if (match.length === 6) {
            dateHour.date = match[4];
            dateHour.hour = match[5];
        } else if (match.length === 5) {
            match.splice(4, 0, dateHour.date);
        } else {
            match.push(dateHour.date);
            match.push(dateHour.hour);
        }
    };

    private static setMatch = (tr: any, matches: MatchResponse[], $: CheerioAPI, dateHour: any) => {
        const match: MatchResponse = MatchService.parseMatch($(tr).text());
        WikipediaCollapsibleTableScrappingStrategy.fixMatch(match, dateHour);
        matches.push(match);
        logInfo(`\t\tRetriving match...: ${match}`);
    };

    private static setDate = (tbody: any, dates: TournamentDate[], $: CheerioAPI) => {
        const idx = dates.length + 1;
        const matches: MatchResponse[] = [];
        const dateHour = { date: null, hour: null };
        logSubtitle(`\tRetriving date ${idx}...`);
        $(tbody).children("tr:nth-child(n + 3)").each((_: number, tr: any) => {
            WikipediaCollapsibleTableScrappingStrategy.setMatch(tr, matches, $, dateHour);
        });
        const date = WikipediaCollapsibleTableScrappingStrategy.getDate(idx, matches);
        dates.push(date);
    }

    apply: ($: CheerioAPI) => TournamentDate[] = ($: CheerioAPI) => {
        const dates: TournamentDate[] = [];
        $(".wikitable.collapsible.collapsed > tbody").each((_: number, tbody: any) => {
            WikipediaCollapsibleTableScrappingStrategy.setDate(tbody, dates, $);
        });
        return dates;
    };

    appliesTo = (_: string, $: CheerioAPI): boolean => {
        return !!$(".wikitable.collapsible.collapsed > tbody").length;
    };
};

export default WikipediaCollapsibleTableScrappingStrategy;