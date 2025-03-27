import { Routes, Route } from "react-router-dom";
import DefaultLayouts from "../components/layouts/DefaultLayouts";
import { HomePage } from "../pages/index";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
