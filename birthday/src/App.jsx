import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/surprise" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;