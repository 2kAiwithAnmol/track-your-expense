import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/transactions" element={<Transactions />}/>
      </Routes>
    </Router>
  )
}
export default App