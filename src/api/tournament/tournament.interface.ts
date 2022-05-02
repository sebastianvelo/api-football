import Table from "../table/table.interface";
import TournamentDate from "../tournament-date/tournament-date.interface";
import TournamentInfo from "../tournament-info/tournament-info.interface";

interface Tournament {
    name: string;
    table: Table;
    info: TournamentInfo;
    dates: TournamentDate[];
}

export default Tournament;