import { rest } from "msw";
import { mockRobot, mockRobotDeleted, mockRobots } from "./mockRobots";

const urlAPI = process.env.REACT_APP_API_URL;
const id = "627fa3a6acf0547ab56a505f";

export const handlers = [
  rest.get(`${urlAPI}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockRobots))
  ),

  rest.delete(`${urlAPI}${id}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockRobot))
  ),
];
