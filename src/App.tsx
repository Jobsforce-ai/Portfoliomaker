import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioTemplate1 from "./page/PortfolioTemplate1";
import PortfolioTemplate2 from "./page/PortfolioTemplate2";
import Home from "./page/Home";
import Classic from "./pages/Classic";
import "./App.css"
import Template1 from "./page/PortfolioTemplate3";
import PortfolioTemplate4 from "./page/PortfolioTemplate4";
import PortfolioTemplate3 from "./page/PortfolioTemplate3";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloud/userid" element={<h1>cloud userid page</h1>} />
          <Route
            path="/template-1/userid"
            element={<PortfolioTemplate1 />}
          />
          <Route
            path="/template-2/userid"
            element={<PortfolioTemplate2 />}
          />
          <Route path="/cloud/userid" element={<h1>Home</h1>} />
          <Route path="/classic" element={<Classic/>}/>
          <Route path="/template-3" element={<PortfolioTemplate3 />} />
          <Route path="/template-4" element={<PortfolioTemplate4 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
