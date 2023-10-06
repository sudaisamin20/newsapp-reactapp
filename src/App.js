// import About from "./components/About";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const pageSize = 8
  const lg = "en"
  const countryName = "in"
  const pageSize = 12
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" lg={lg} category="general" pageSize={pageSize} countryName={countryName} />}></Route>
          {/* <Route exact path="/About" element={<News key="About" lg={lg} pageSize={pageSize} />}></Route> */}
          <Route exact path="/business" element={<News key="business" lg={lg} category="business" countryName={countryName} />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" lg={lg} category="entertainment" pageSize={pageSize} countryName={countryName} />}></Route>
          <Route exact path="/general" element={<News key="general" lg={lg} category="general" pageSize={pageSize} countryName={countryName} />}></Route>
          <Route exact path="/health" element={<News key="health" lg={lg} category="health" pageSize={pageSize} countryName={countryName} />}></Route>
          <Route exact path="/science" element={<News key="science" lg={lg} category="science" pageSize={pageSize} countryName={countryName} />}></Route>
          <Route exact path="/sports" element={<News key="sports" lg={lg} countryName={countryName} category="sports" pageSize={pageSize} />}></Route>
          <Route exact path="/technology" element={<News key="technology" lg={lg} countryName={countryName} category="technology" pageSize={pageSize} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
