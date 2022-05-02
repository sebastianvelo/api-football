import Match, { MatchResponse } from "./match.interface";

const getGoals = (goals: string): [number, number] => {
    const goalsArray = goals.includes("–") ? goals.split("–") : goals.split("-");
    return [parseInt(goalsArray[0]), parseInt(goalsArray[1])];
};

export const getMatch = (response: MatchResponse): Match => {
    const goals = getGoals(response[1]);
    return {
        home: {
            team: {
                name: response[0]
            },
            goals: goals[0]
        },
        away: {
            team: {
                name: response[2]
            },
            goals: goals[1]
        },
        date: response[4],
        hour: response[5],
        stadium: {
            name: response[3]
        }
    }
};

export const getMatches = (response: MatchResponse[]): Match[] => response.map(getMatch);

export const parseMatch = (row: string): MatchResponse => row.replace("\n", "").split("\n\n").map(i => i.replace("\n", "")) as MatchResponse;

