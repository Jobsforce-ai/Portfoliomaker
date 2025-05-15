import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioTemplate1 from "./page/PortfolioTemplate1";
import PortfolioTemplate2 from "./page/PortfolioTemplate2";
import Classic from "./pages/Classic";
import "./App.css";
import PortfolioTemplate4 from "./page/PortfolioTemplate4";
import PortfolioTemplate3 from "./page/PortfolioTemplate3";
import AuthWrapper from "./AuthWrapper";
import WelcomePage from "./page/WelcomePage";
import NotFound from "./page/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
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
            path="/core/:userid"
            element={
              <AuthWrapper>
                <PortfolioTemplate2 />
              </AuthWrapper>
            }
          />
          <Route path="/classic" element={<Classic />} />
          <Route
            path="/flux/:userid"
            element={
              <AuthWrapper>
                <PortfolioTemplate3 />
              </AuthWrapper>
            }
          />
          <Route
            path="/bolt/:userid"
            element={
              <AuthWrapper>
                <PortfolioTemplate4 />
              </AuthWrapper>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
