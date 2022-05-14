import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

const urlAPI = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => async (dispatch) => {
  const { data: robots } = await axios.get(urlAPI);
  dispatch(loadRobotsActionCreator(robots));
};
