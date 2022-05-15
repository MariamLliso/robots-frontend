import { useSelector } from "react-redux";
import Robot from "../../Robot/Robot";
import RobotListStyle from "./RobotsListStyle";

const RobotsListPage = () => {
  const robots = useSelector((state) => state.robots);

  return (
    <RobotListStyle>
      {robots.map((robot) => (
        <li key={robot._id}>
          <Robot robot={robot} />
        </li>
      ))}
    </RobotListStyle>
  );
};

export default RobotsListPage;
