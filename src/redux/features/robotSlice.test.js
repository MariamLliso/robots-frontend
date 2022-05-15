import { mockRobotDeleted, mockRobots } from "../../mocks/mockRobots";
import robotsReducer, {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "./robotsSlice";

describe("Given the robotReducer", () => {
  describe("When loadRobots it's invoked with two robots", () => {
    test("Then it should return a new state with the given robots", () => {
      const initialState = [];

      const loadRobots = loadRobotsActionCreator(mockRobots);

      const expectedResult = robotsReducer(initialState, loadRobots);

      expect(expectedResult).toStrictEqual(mockRobots.robots);
    });
  });

  describe("When deleteRobot it's invoked with id '627fa3a6acf0547ab56a505f'", () => {
    test("Then it should return a new state without the deleted robot", () => {
      const initialState = mockRobots;
      const id = "627fa3a6acf0547ab56a505f";

      const deleteRobot = deleteRobotActionCreator(id);
      const expectedResult = robotsReducer(initialState, deleteRobot);

      expect(expectedResult).toStrictEqual(mockRobotDeleted);
    });
  });
});
