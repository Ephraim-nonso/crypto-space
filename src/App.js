import Header from "./components/header/Index";
import { CryptoInfo } from "./components/contextApi/CryptoInfo";
import { useState, useEffect } from "react";
import axios from "axios";
import Content from "./components/body/Content";
// import { CoinGeckoClient } from "coingecko-api-v3";

function App() {
  const [info, setInfo] = useState([]);
  const searched = [];
  const [find, setFind] = useState("");

  // useEffect(() => {
  //   const coinInfo = axios
  //     .get(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
  //     )
  //     .then((res) => {
  //       setInfo(res.data);
  //     });
  // }, []);

  // console.log(info);

  return (
    <CryptoInfo.Provider value={{ info, setInfo, searched, find, setFind }}>
      <div>
        <Header />
        <Content />
      </div>
    </CryptoInfo.Provider>
  );
}

export default App;
