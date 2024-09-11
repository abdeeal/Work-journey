import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Creators from "./pages/Creators";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { AnimatePresence } from "framer-motion";
import Error from "./pages/Error";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/profile/me" element={<Profile />} />
        <Route path="/profile/creators" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
