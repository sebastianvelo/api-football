import { Express } from "express";
import tournamentDatesRouter from "./api/tournament-date/tournament-date.router";
import tournamentRouter from "./api/tournament/tournament.router";

const ROUTER_PREFIX = "/api";

const setRoutes = (app: Express) => {

    app.use(`${ROUTER_PREFIX}/tournament`, tournamentRouter);
    app.use(`${ROUTER_PREFIX}/tournament/dates`, tournamentDatesRouter);
}

export default setRoutes;