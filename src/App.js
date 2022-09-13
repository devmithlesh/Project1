import "./App.css";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* page note found */}
        <Route path="*" element={<NoMatch />} />
        {/* main file Home */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
