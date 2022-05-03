import { CheerioAPI } from "cheerio";
import { logSubtitle } from "../../../common/Logger";
import * as StrategyService from "./strategy/strategy.service";
import TeamRow from "./team-row.interface";

export const getTeams = (query: string, $: CheerioAPI): TeamRow[] => {
    logSubtitle(`\t\tRetriving all teams...`);
    const teams: TeamRow[] =  StrategyService.getStrategy(query, $).apply($);
    logSubtitle(`\t\tFinish retriving teams`);
    return teams;
};