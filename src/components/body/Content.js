import React, { useContext, useEffect } from "react";
import axios from "axios";
import { CryptoInfo } from "../contextApi/CryptoInfo";
import "./styles.css";

function Content() {
  const { info, setInfo } = useContext(CryptoInfo);
  console.log(info);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
      )
      .then((res) => {
        setInfo(res.data);
      });
  }, []);

  const coinDetails = info.map((item) => (
    <div className="coin-details" key={item.id}>
      <div className="name-image">
        <img src={item.image} alt={item.name} />
        <h5>{item.name}</h5>
      </div>

      <div className="symbol">
        <p>{item.symbol}</p>
      </div>
      <div className="current-price">
        <p>${item.current_price.toFixed(2)} </p>
      </div>

      <div
        className="price-percent"
        style={{
          color: item.price_change_percentage_24h < 0 ? "red" : "green",
        }}
      >
        <p>{item.price_change_percentage_24h.toFixed(2)} %</p>
      </div>
      <div className="market-cap">
        <p>{item.market_cap}</p>
      </div>
    </div>
  ));

  return <div className="main-section">{coinDetails}</div>;
}

export default Content;
