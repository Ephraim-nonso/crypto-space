import React, { useContext, useState, useEffect } from "react";
import "./Styles.css";
import { CryptoInfo } from "../contextApi/CryptoInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Header() {
  let { searched, find, setFind } = useContext(CryptoInfo);
  const [value, setValue] = useState("");
  let [render, setRender] = useState([]);

  const inputHandler = (e) => {
    e.preventDefault();
    setFind(value);

    // const searchedCoin = axios
    //   .get(`https://api.coingecko.com/api/v3/coins/${value.toLowerCase()}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     setRender([...render, res.data]);
    //     setValue("");
    //     setFind(!find);
    //   })
    //   .catch((err) => console.log(err));
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // console.log(render, (searched = render));

  return (
    <header>
      <nav className="nav-items">
        <h1>Crypto Space</h1>
        <div className="search-box">
          <form onSubmit={inputHandler}>
            <input
              type="text"
              placeholder="Search for a coin"
              value={value}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
