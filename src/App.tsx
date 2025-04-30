import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template1 from "./page/Template1";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cloud/userid" element={<h1>Home</h1>} />
          <Route path="/template1/userid" element={<Template1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
