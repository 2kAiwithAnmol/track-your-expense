import React from "react"
import {Link} from "react-router-dom"
import "./style.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Track Your Expense</h2>
            <div className="navbar-links">
                <Link to="/">Dashboard</Link>
                <Link to="/transactions">Transcations</Link>
            </div>
        </nav>
    )
}
export default Navbar