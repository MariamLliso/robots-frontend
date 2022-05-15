import { rest } from "msw";
import { mockRobots } from "./mockRobots";

const urlAPI = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.get(`${urlAPI}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockRobots))
  ),
];
