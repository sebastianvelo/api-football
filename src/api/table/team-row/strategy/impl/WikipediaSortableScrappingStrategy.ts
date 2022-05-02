import { CheerioAPI } from "cheerio";
import { logInfo } from "../../../../../common/Logger";
import TeamRow from "../../team-row.interface";
import TeamRowScrappingStrategy from "../strategy.interface";

class WikipediaSortableScrappingStrategy implements TeamRowScrappingStrategy {
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
        const teams: TeamRow[] = [];
        $('.wikitable.sortable > tbody').first().children("tr:nth-child(n + 2)")
            .each((_: number, tr: any) => {
                const teamDAO: string[] = [];
                $(tr).children("td").each((_: number, td: any) => {
                    teamDAO.push($(td).text())
                });
                const team: TeamRow = WikipediaSortableScrappingStrategy.getTeamRow(teamDAO);
                teams.push(team);
                logInfo(`Get team ${team.team.name}...`);

            });
        return teams;
    };

    appliesTo = (query: string, $: CheerioAPI): boolean => {
        return $('.wikitable.sortable > tbody').length > 0;
    };
}

export default WikipediaSortableScrappingStrategy;