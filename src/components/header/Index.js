import React, { useContext } from "react";
import "./Styles.css";
import { CryptoInfo } from "../contextApi/CryptoInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { info, setInfo } = useContext(CryptoInfo);
  return (
    <header>
      <nav className="nav-items">
        <h1 onClick={() => setInfo("Pressed")}>Crypto Space</h1>
        <div className="search-box">
          <form action="">
            <input placeholder="Search for a coin" />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
