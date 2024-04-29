import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./components/Index";
import Inbox from "./components/Inbox";
import Register from "./components/Register";
import Contacts from "./components/Contacts";
import Createcampaign from "./components/Createcampaign";
import Lists from "./components/Lists";
import Campaign from "./components/Campaign";
import Statistics from "./components/Statistics";
import Setting from "./components/Setting";
import Transactional from "./components/Transactional";
import TransactionalStats from "./components/TransactionalStats";
import Transactionalsetting from "./components/Transactionalsetting";
import Senders from "./components/Senders";
import Domain from "./components/Domain";
import Security from "./components/Security";
import Plans from "./components/Plans";
import Logout from "./components/Logout";
import Inboxes from "./components/Inboxes";
function App() {
  const [mode, setMode] = useState(
    "sidebar-o enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled sidebar-dark "
  );

  const toggle = (e) => {
    if (
      mode ===
      "sidebar-o enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled sidebar-dark page-header-dark dark-mode"
    ) {
      setMode(
        "sidebar-o sidebar-light side-scroll page-header-fixed main-content-narrow"
      );
    } else {
      setMode(
        "sidebar-o enable-page-overlay side-scroll page-header-fixed main-content-narrow side-trans-enabled sidebar-dark page-header-dark dark-mode"
      );
    }
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route
            path="/inbox"
            element={<Inbox mode={mode} toggle={toggle} />}
          ></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/contacts"
            element={<Contacts mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/Createcampaign"
            element={<Createcampaign mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/lists"
            element={<Lists mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/campaigns"
            element={<Campaign mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/statistics"
            element={<Statistics mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/settings"
            element={<Setting mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/transactional"
            element={<Transactional mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/transactionalstats"
            element={<TransactionalStats mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/transactionalsetting"
            element={<Transactionalsetting mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/senders"
            element={<Senders mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/domain"
            element={<Domain mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/security"
            element={<Security mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/myplan"
            element={<Plans mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/logout"
            element={<Logout mode={mode} toggle={toggle} />}
          ></Route>
          <Route
            path="/inboxes"
            element={<Inboxes mode={mode} toggle={toggle} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
