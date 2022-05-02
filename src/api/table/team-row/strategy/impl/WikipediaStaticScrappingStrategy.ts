import { CheerioAPI } from "cheerio";
import { logInfo } from "../../../../../common/Logger";
import TeamRow from "../../team-row.interface";
import TeamRowScrappingStrategy from "../strategy.interface";

class WikipediaStaticScrappingStrategy implements TeamRowScrappingStrategy {
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
        const teams: TeamRow[] = [];
        $('h2')
            .filter(function () { return $(this).text().includes("Clasificación"); })
            .next().find("tbody").children("tr:nth-child(n + 2)")
            .each((_: number, tr: any) => {
                const teamDAO: string[] = [];
                $(tr).children("td").each((_: number, td: any) => {
                    teamDAO.push($(td).text())
                });
                const team: TeamRow = WikipediaStaticScrappingStrategy.getTeamRow(teamDAO);
                teams.push(team);
                logInfo(`Get team ${team.team.name}...`);

            });
        return teams;
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

export default WikipediaStaticScrappingStrategy;