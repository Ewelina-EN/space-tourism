import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
// import { Nav } from "./pages/navigation";
import GlobalStyle from "./style/globalStyle";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

function App() {
  return (
    <Router>
      {/* <Nav/> */}
      <GlobalStyle />
      <Routes>
        <Route path="/space-tourism" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}
export default App;
