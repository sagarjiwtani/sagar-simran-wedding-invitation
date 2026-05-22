import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invitation from "./pages/Invitation";
import EnvelopeIntro from "./pages/EnvelopeIntro";

function App() {
  return (
    <div className="App" data-testid="app-root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnvelopeIntro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;