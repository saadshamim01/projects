import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={[<Home />]} />
          <Route path="/api/search" element={[<Search />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
