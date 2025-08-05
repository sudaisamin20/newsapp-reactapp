// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  // const pageSize = 8
  const lg = "en"
  const countryName = "in"
  const pageSize = 12
  const [progress, setProgress] = useState(0)
  const progressLoadingBar = (data) => {
    setProgress(data)
  }

  return (
    <div>
      <Router>
        <LoadingBar height={"4px"} progress={progress} color="blue" onLoaderFinished={() => progressLoadingBar(0)} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" lg={lg} category="general" pageSize={pageSize} countryName={countryName} progress={progressLoadingBar} />}></Route>
          {/* <Route exact path="/About" element={<News key="About" lg={lg} pageSize={pageSize} />}></Route> */}
          <Route exact path="/business" element={<News key="business" lg={lg} category="business" countryName={countryName} progress={progressLoadingBar} />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" lg={lg} category="entertainment" pageSize={pageSize} countryName={countryName} progress={progressLoadingBar} />}></Route>
          <Route exact path="/general" element={<News key="general" lg={lg} category="general" pageSize={pageSize} countryName={countryName} progress={progressLoadingBar} />}></Route>
          <Route exact path="/health" element={<News key="health" lg={lg} category="health" pageSize={pageSize} countryName={countryName} progress={progressLoadingBar} />}></Route>
          <Route exact path="/science" element={<News key="science" lg={lg} category="science" pageSize={pageSize} countryName={countryName} progress={progressLoadingBar} />}></Route>
          <Route exact path="/sports" element={<News key="sports" lg={lg} countryName={countryName} progress={progressLoadingBar} category="sports" pageSize={pageSize} />}></Route>
          <Route exact path="/technology" element={<News key="technology" lg={lg} countryName={countryName} progress={progressLoadingBar} category="technology" pageSize={pageSize} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
