import { CheerioAPI } from "cheerio";
import { logAccent, logTitle } from "../../common/Logger";
import * as StrategyService from "./strategy/strategy.service";
import TournamentInfo from "./tournament-info.interface";

export const getInfo = (query: string, $: CheerioAPI): TournamentInfo => {
    logAccent(`\n\t###############`);
    logTitle(`\tRetriving info for ${query}`);
    const info: TournamentInfo = StrategyService.getStrategy(query, $).apply($);
    logTitle(`\tFinish retriving info for ${query}`);
    logAccent(`\t###############`);
    return info;
};