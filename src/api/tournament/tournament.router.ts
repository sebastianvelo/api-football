import express, { Request, Response } from "express";
import * as TournamentService from "./tournament.service";
import Tournament from "./tournament.interface";
import { logTitle } from "../../common/Logger";

const tournamentRouter = express.Router();

tournamentRouter.get("/:query", async (req: Request, res: Response) => {
    const query: string = req.params.query;
    logTitle(`Init getting tournament: ${query}`);

    try {
        const response: Tournament = await TournamentService.getTournament(query);

        if (response.dates.length > 0) {
            return res.status(200).send(response);
        };

        return res.status(404).send("not found");
    } catch (e: any) {
        return res.status(500).send(e.message);
    }
});

tournamentRouter.post("/all", async (req: Request, res: Response) => {
    const queries: string[] = req.body.leagues;
    logTitle(`Retrieve all tournaments ${queries}`);
    if (!queries) return res.status(400).send("no queries");
    
    try {
        const response: Tournament[] = await TournamentService.getTournaments(queries);

        if (response.length > 0) {
            return res.status(200).send(response)
        };

        return res.status(404).send("Tournaments not found");
    } catch (e: any) {
        return res.status(500).send(e.message);
    }
});

export default tournamentRouter;
