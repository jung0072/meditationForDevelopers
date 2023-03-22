import { Routes, Route } from "react-router-dom";
import RootLayer from "./common/layout/RootLayer";
import Home from "./pages/home/components/Home";
import Community from "./pages/community/components/Community";
import About from "./pages/about/components/About";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayer />}>
        <Route path="/" element={<Home />} />
        <Route path="community" element={<Community />} />
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
