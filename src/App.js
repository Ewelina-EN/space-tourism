import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./pages/destination";
import Homepage from "./pages/homepage";
import Nav from "./pages/navigation";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <Router>
      <Nav />
      <GlobalStyle />
      <Routes>
        <Route exact path="/space-tourism" element={<Homepage />} />
        <Route exact path="/destination" element={<Destination />} />
      </Routes>
    </Router>
  );
}

export default App;
