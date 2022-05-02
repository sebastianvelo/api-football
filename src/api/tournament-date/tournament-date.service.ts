import { CheerioAPI } from "cheerio";
import { logTitle } from "../../common/Logger";
import * as PageService from "../page/page.service";
import * as StrategyService from "./strategy/strategy.service";
import TournamentDate from "./tournament-date.interface";

export const getAllDates = (query: string, $: CheerioAPI): TournamentDate[] => {
    logTitle(`Retriving all dates...`);
    const dates: TournamentDate[] = StrategyService.getStrategy(query, $).apply($);
    logTitle(`Finish retriving dates`);
    return dates;
};

export const getDatesFromTournament = async (query: string): Promise<TournamentDate[]> => {
    const $ = await PageService.getPage(query);
    return getAllDates(query, $);
}