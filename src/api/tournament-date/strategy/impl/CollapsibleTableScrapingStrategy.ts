import { CheerioAPI } from "cheerio";
import { logInfo, logSubtitle } from "../../../../common/Logger";
import { MatchResponse } from "../../../match/match.interface";
import * as MatchService from "../../../match/match.service";
import TournamentDate from "../../tournament-date.interface";
import TournamentDateScrapingStrategy from "../strategy.interface";

class CollapsibleTableScrapingStrategy implements TournamentDateScrapingStrategy {

    private static sanitizeMatch = (match: MatchResponse, dateHour: any) => {
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

    private static getMatch = (matchStr: string, dateHour: any) => {
        const match: MatchResponse = MatchService.getMatchResponseFromString(matchStr);
        CollapsibleTableScrapingStrategy.sanitizeMatch(match, dateHour);
        logInfo(`\t\t\tRetriving match: ${match}`);
        return match;
    };

    private static getDateMatches = (tbody: any, $: CheerioAPI) => {
        const dateHour = { date: null, hour: null };
        return $(tbody)
            .children("tr:nth-child(n + 3)")
            .map((_: number, tr: any) => CollapsibleTableScrapingStrategy.getMatch($(tr).text(), dateHour))
            .toArray() as unknown as MatchResponse[];
    }

    private static getDate = (idx: number, tbody: any, $: CheerioAPI) => {
        logSubtitle(`\t\tRetriving date ${idx}`);
        const matches: MatchResponse[] = CollapsibleTableScrapingStrategy.getDateMatches(tbody, $);
        return {
            idx,
            matches: MatchService.getMatchesFromResponse(matches)
        };
    }

    private static getDates = ($: CheerioAPI) => $(".wikitable.collapsible.collapsed > tbody").map((i: number, tbody: any) =>
        CollapsibleTableScrapingStrategy.getDate(i, tbody, $)
    ).toArray();


    apply = ($: CheerioAPI): TournamentDate[] => {
        return CollapsibleTableScrapingStrategy.getDates($);
    };

    appliesTo = (_: string, $: CheerioAPI): boolean => {
        return !!$(".wikitable.collapsible.collapsed > tbody").length;
    };
};

export default CollapsibleTableScrapingStrategy;