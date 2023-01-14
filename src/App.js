import Homepage from "./pages/homepage";
import { Nav } from "./pages/navigation";
import GlobalStyle from "./style/globalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <GlobalStyle />
          <Routes>
           <Route exact path='/space-tourism-website-react-NEW' element={<Homepage />}></Route>
          </Routes>
      </Router>   
    </>
  );
}

export default App;
