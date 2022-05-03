import { CheerioAPI } from "cheerio";
import { logAccent, logInfo, logTitle } from "../../common/Logger";
import Table from "./table.interface";
import * as TeamRowService from "./team-row/team-row.service";

export const getTable = (query: string, $: CheerioAPI): Table => {
    logAccent(`\n\t###############`);
    logTitle(`\tRetriving table`);
    const teams = TeamRowService.getTeams(query, $);
    const table: Table = {
        teams,
    };
    logTitle(`\tFinish retriving table`);
    logAccent(`\t###############`);
    return table;
}