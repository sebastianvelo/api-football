import Stadium from "../stadium/stadium.interface";
import Team from "../team/team.interface";

type Home = string;
type Away = string;
type Result = string;
type StadiumName = string;
type DateString = string;
type Hour = string;
export type MatchResponse = [Home, Result, Away, StadiumName, DateString, Hour];

export interface TeamDate {
    team: Team;
    goals: number;
}

interface Match {
    home: TeamDate;
    away: TeamDate;
    date: string;
    hour: string;
    stadium: Stadium;
}

export default Match;