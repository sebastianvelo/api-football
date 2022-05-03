import { CheerioAPI } from "cheerio";
import { logInfo } from "../../../../../common/Logger";
import TeamRow from "../../team-row.interface";
import TeamRowScrapingStrategy from "../strategy.interface";

class SortableTableScrapingStrategy implements TeamRowScrapingStrategy {
    static getTeamRow = (dao: string[]) => ({
        team: {
            name: dao[1].replace("\n", ""),
        },
        wins: parseInt(dao[4]),
        loss: parseInt(dao[6]),
        ties: parseInt(dao[5]),
        goalsFor: parseInt(dao[7]),
        goalsAgainst: parseInt(dao[8]),
        points: parseInt(dao[2]),
    });

    apply = ($: CheerioAPI): TeamRow[] => {
        const teamsElements = $('.wikitable.sortable > tbody').first().children("tr:nth-child(n + 2)");
        return teamsElements.map((_: number, tr: any) => {
            const cells = $(tr).children("td");
            const teamDAO: string[] = cells.map((_: number, td: any) => $(td).text()).toArray();
            const team: TeamRow = SortableTableScrapingStrategy.getTeamRow(teamDAO);
            logInfo(`\t\t\tGetting team ${team.team.name}`);
            return team;
        }).toArray();
    };

    appliesTo = (query: string, $: CheerioAPI): boolean => {
        return $('.wikitable.sortable > tbody').length > 0;
    };
}

export default SortableTableScrapingStrategy;