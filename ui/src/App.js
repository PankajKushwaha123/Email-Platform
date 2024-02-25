import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Inbox from "./components/Inbox";
import Register from "./components/Register";
import Contacts from "./components/Contacts";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/inbox" element={<Inbox />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
