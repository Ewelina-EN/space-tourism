import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      </Routes>
    </Router>
  );
}

export default App;
