import Button from "../layout/Button/Button";
import RobotStyle from "./RobotStyle";

const Robot = ({ robot }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join("-");
  };

  return (
    <RobotStyle>
      <div className="robot__image">
        <img src={robot.image} alt={robot.name} width="150" height="150" />
      </div>
      <h2 className="robot__name">{robot.name}</h2>
      <ul className="robot__caracteristics">
        <li className="atribute">
          <h3 className="robot__creation-date">Created on</h3>
          <h3 className="robot__creation-date">
            {formatDate(robot.creationDate)}
          </h3>
        </li>
        <li className="atribute">
          <h4 className="atribute__name">Resistance</h4>
          <h4 className="atribute__stat">{robot.resistance}</h4>
        </li>
        <li className="atribute">
          <h4 className="atribute__name">Speed</h4>
          <h4 className="atribute__stat">{robot.speed}</h4>
        </li>
      </ul>

      <Button text={"Delete"} />
    </RobotStyle>
  );
};

export default Robot;
