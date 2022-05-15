import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AppContainerStyle from "./AppContainerStyle";
import Header from "./components/layout/Header/Header";
import RobotsListPage from "./components/pages/RobotsListPage/RobotsListPage";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <AppContainerStyle>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/RobotList" />} />
        <Route path="/RobotList" element={<RobotsListPage />} />
      </Routes>
    </AppContainerStyle>
  );
};

export default App;
