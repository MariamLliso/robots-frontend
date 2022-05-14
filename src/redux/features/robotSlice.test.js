import robotsReducer, { loadRobotsActionCreator } from "./robotsSlice";

describe("Given the robotReducer", () => {
  const robots = [
    {
      _id: "62800e732a9652f9d7d40377",
      name: "K-9",
      image: "https://i.imgur.com/S8eJabl.png",
      speed: 10,
      resistance: 10,
      creationDate: "2022-05-14T20:17:55.592Z",
    },
    {
      _id: "62800e732a9652f9d7d40378",
      name: "A-1ex",
      image: "https://i.imgur.com/JtlgQJ3.png",
      speed: 4,
      resistance: 7,
      creationDate: "2022-05-14T20:17:55.592Z",
    },
  ];

  describe("When loadRobots it's invoked with two robots", () => {
    test("Then it should return a new state with the given robots", () => {
      const initialState = [];

      const loadRobots = loadRobotsActionCreator(robots);

      const expectedResult = robotsReducer(initialState, loadRobots);

      expect(expectedResult).toStrictEqual(robots);
    });
  });
});
