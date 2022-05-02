import { CheerioAPI } from "cheerio";
import { logInfo } from "../../common/Logger";
import Table from "./table.interface";
import * as TeamRowService from "./team-row/team-row.service";

export const getTable = (query: string, $: CheerioAPI): Table => {
    logInfo(`Retriving table`);
    const teams = TeamRowService.getTeams(query, $);
    const table: Table = {
        teams,
    };
    logInfo(`Finish retriving table ${table}`);
    return table;
}