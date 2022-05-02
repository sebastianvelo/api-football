import Team from "../../team/team.interface";

interface TeamRow {
    team: Team;
    wins: number;
    loss: number;
    ties: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
}

export default TeamRow;