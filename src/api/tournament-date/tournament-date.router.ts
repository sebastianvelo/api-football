import express, { Request, Response } from "express";
import { logTitle } from "../../common/Logger";
import TournamentDate from "./tournament-date.interface";
import * as TournamentDateService from "./tournament-date.service";

const tournamentDateRouter = express.Router();

tournamentDateRouter.get("/:query", async (req: Request, res: Response) => {
    const query: string = req.params.query;
    logTitle(`Retrieve dates from ${query}`);
    try {
        const response: TournamentDate[] = await TournamentDateService.getDatesFromTournament(query);
        if (response.length > 0) return res.status(200).send(response);
        res.status(404).send("not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

export default tournamentDateRouter;
