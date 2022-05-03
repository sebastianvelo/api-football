import { CheerioAPI } from "cheerio";
import { logAccent, logTitle } from "../../common/Logger";
import * as PageService from "../page/page.service";
import * as StrategyService from "./strategy/strategy.service";
import TournamentDate from "./tournament-date.interface";

export const getAllDates = (query: string, $: CheerioAPI): TournamentDate[] => {
    logAccent(`\n\t###############`);
    logTitle(`\tRetriving all dates...`);
    const dates: TournamentDate[] = StrategyService.getStrategy(query, $).apply($);
    logTitle(`\tFinish retriving dates`);
    logAccent(`\t###############`);
    return dates;
};

export const getDatesFromTournament = async (query: string): Promise<TournamentDate[]> => {
    const $ = await PageService.getPage(query);
    return getAllDates(query, $);
}