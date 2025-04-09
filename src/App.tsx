import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classic from "./pages/Classic";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cloud/userid" element={<h1>Home</h1>} />
          <Route path="/classic" element={<Classic/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
