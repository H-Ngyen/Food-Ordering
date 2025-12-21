import MainNav from "./components/MainNav";
import Layout from "./layouts/layout";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-profile" element={<span>user profile</span>} />
        <Route path="/ui" element={<MainNav />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
