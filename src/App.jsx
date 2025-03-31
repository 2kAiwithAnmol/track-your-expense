import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import "./style.css"

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Dashboard</Link>
        <Link to="/transactions">Transactions</Link>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/transactions" element={<Transactions />}/>
      </Routes>
    </Router>
  )
}
export default App