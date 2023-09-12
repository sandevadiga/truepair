import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing menu and close icons from react-icons/fi

import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>TruePair</h1>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}{" "}
        {/* Toggle between menu and close icons based on menuOpen state */}
      </button>
      <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <a href='/nav1'>some</a> // here i didit updates another done
        </li>
        <li>
          <a href='/nav2'>some</a> // here also
        </li>
        <li>
          <a href='/nav3'>some</a>
        </li>
        <li>
          <a href='/nav4'>some</a>
        </li>
        <li>
          <a href='/nav5'>some</a>
        </li>
        <li>
          <a href='/nav6'>some</a>
        </li>
      </nav>
      <button className={styles.registerButton}>Register Now</button>
    </header>
  );
};

export default Header;
