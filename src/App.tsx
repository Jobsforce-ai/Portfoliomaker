import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioTemplate1 from "./page/PortfolioTemplate1";
import PortfolioTemplate2 from "./page/PortfolioTemplate2";
import Home from "./page/Home";
import Classic from "./pages/Classic";
import "./App.css";
import PortfolioTemplate4 from "./page/PortfolioTemplate4";
import PortfolioTemplate3 from "./page/PortfolioTemplate3";
import AuthWrapper from "./AuthWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloud/userid" element={<h1>cloud userid page</h1>} />
          <Route
            path="/Nova/:userid"
            element={
              <AuthWrapper>
                <PortfolioTemplate1 />
              </AuthWrapper>
            }
          />
          <Route
            path="/creative/:userid"
            element={
              <AuthWrapper>
                <PortfolioTemplate2 />
              </AuthWrapper>
            }
          />
          <Route path="/cloud/userid" element={<h1>Home</h1>} />
          <Route path="/classic" element={<Classic />} />
          <Route
            path="/professional/:userid"
            element={
              <AuthWrapper>
                <PortfolioTemplate3 />
              </AuthWrapper>
            }
          />
          <Route
            path="/tech/:userid"
            element={
              <AuthWrapper>
                <PortfolioTemplate4 />
              </AuthWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
