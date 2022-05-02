import { CheerioAPI } from "cheerio";
import { logTitle } from "../../../common/Logger";
import * as StrategyService from "./strategy/strategy.service";
import TeamRow from "./team-row.interface";

export const getTeams = (query: string, $: CheerioAPI): TeamRow[] => {
    logTitle(`Retriving all rows...`);
    const teams: TeamRow[] =  StrategyService.getStrategy(query, $).apply($);
    logTitle(`Finish retriving rows`);
    return teams;
};