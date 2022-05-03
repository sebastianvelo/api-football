import { CheerioAPI } from "cheerio";
import { logInfo } from "../../../../../common/Logger";
import TeamRow from "../../team-row.interface";
import TeamRowScrapingStrategy from "../strategy.interface";

class StaticTableScrapingStrategy implements TeamRowScrapingStrategy {
    static getTeamRow = (dao: string[]) => ({
        team: {
            name: dao[0].replace("\n", ""),
        },
        wins: parseInt(dao[3]),
        loss: parseInt(dao[5]),
        ties: parseInt(dao[4]),
        goalsFor: parseInt(dao[6]),
        goalsAgainst: parseInt(dao[7]),
        points: parseInt(dao[1]),
    });

    apply = ($: CheerioAPI): TeamRow[] => {
        const teamsElements = $('h2').filter(function () { return $(this).text().includes("Clasificación"); }).next().find("tbody").children("tr:nth-child(n + 2)");
        return teamsElements.map((_: number, tr: any) => {
            const cells = $(tr).children("td");
            const teamDAO: string[] = cells.map((_: number, td: any) => $(td).text()).toArray();
            const team: TeamRow = StaticTableScrapingStrategy.getTeamRow(teamDAO);
            logInfo(`\t\t\tGetting team ${team.team.name}...`);
            return team;
        }).toArray();
    };

    appliesTo = (query: string, $: CheerioAPI): boolean => {
        const conditions = [
            "Premier_League",
            "Primera_División_de_España",
            "Eredivisie",
        ];
        return conditions.some((cond) => query.includes(cond));
    };
}

export default StaticTableScrapingStrategy;