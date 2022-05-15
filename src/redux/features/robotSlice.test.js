import { mockRobots } from "../../mocks/mockRobots";
import robotsReducer, { loadRobotsActionCreator } from "./robotsSlice";

describe("Given the robotReducer", () => {
  describe("When loadRobots it's invoked with two robots", () => {
    test("Then it should return a new state with the given robots", () => {
      const initialState = [];

      const loadRobots = loadRobotsActionCreator(mockRobots);

      const expectedResult = robotsReducer(initialState, loadRobots);

      expect(expectedResult).toStrictEqual(mockRobots.robots);
    });
  });
});
