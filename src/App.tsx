import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioTemplate1 from "./page/PortfolioTemplate1";
import PortfolioTemplate2 from "./page/PortfolioTemplate2";
import Home from "./page/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloud/userid" element={<h1>cloud userid page</h1>} />
          <Route
            path="/portfolio/template-1"
            element={<PortfolioTemplate1 />}
          />
          <Route
            path="/portfolio/template-2"
            element={<PortfolioTemplate2 />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
