import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>USER.ME</h1>
      </div>
      <nav className="header-menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="menu-item">
            <Link to="/users">USERS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
