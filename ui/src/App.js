import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Inbox from "./components/Inbox";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/inbox" element={<Inbox />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
