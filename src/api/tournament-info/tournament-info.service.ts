import { CheerioAPI } from "cheerio";
import { logTitle } from "../../common/Logger";
import * as StrategyService from "./strategy/strategy.service";
import TournamentInfo from "./tournament-info.interface";

export const getInfo = (query: string, $: CheerioAPI): TournamentInfo => {
    logTitle(`Retriving info for ${query}`);
    const info: TournamentInfo = StrategyService.getStrategy(query, $).apply($);
    logTitle(`Finish retriving info for ${query}`);
    return info;
};