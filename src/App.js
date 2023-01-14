
import { Homepage } from "./pages/homepage";
// import { Nav } from "./pages/navigation";
import GlobalStyle from "./style/globalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Destination } from "./pages/destination";
import { Crew } from "./pages/crew";

function App() {
  return (
    <>
      <Router>
        {/* <Nav/> */}
        <GlobalStyle />
          <Routes>
          <Route path='/space-tourism-website-react-NEW' element={<Homepage />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
          <Route path='/crew' element={<Crew />}></Route>
          </Routes>
      </Router>   
    </>
  );

}

export default App;
