import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./style.css"

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2 className="logo">Track Your Expense</h2>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}> ☰ </button>
            <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <Link to="/transactions" className={`nav-link ${location.pathname === "/transactions" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Transactions</Link>

            </div>
        </nav>
    )


}
export default Navbar