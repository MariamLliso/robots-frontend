import axios from "axios";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../features/robotsSlice";

const urlAPI = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => async (dispatch) => {
  const { data: robots } = await axios.get(urlAPI);
  dispatch(loadRobotsActionCreator(robots));
};

export const deleteRobotsThunk = (id) => async (dispatch) => {
  const { data: robot, status } = await axios.delete(`${urlAPI}${id}`);
  if (status === 200) {
    dispatch(deleteRobotActionCreator(robot._id));
  }
};
