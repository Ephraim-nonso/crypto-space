import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CryptoInfo } from "../contextApi/CryptoInfo";
import "./styles.css";
import loadImage from "../../assets/1.gif";

function Content() {
  const { info, setInfo, searched, find } = useContext(CryptoInfo);
  const [load, setLoad] = useState(true);
  //   console.log(find);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
      )
      .then((res) => {
        setInfo(res.data);
        setLoad(false);
      });
  }, []);

  const searchedCoin = axios
    .get(`https://api.coingecko.com/api/v3/coins/${find.toLowerCase()}`)
    .then((res) => {
      console.log(res.data);
      // setRender([...render, res.data]);
      // setValue("");
      // setFind(!find);
    })
    .catch((err) => console.log(err));

  const showInfo = find ? searched : info;
  //   console.log(searched);

  const coinDetails = showInfo.map((item) => (
    <div className="coin-details" key={item.id}>
      <div className="name-image">
        <img src={item.image} alt={item.name} />
        <h5>{item.name}</h5>
      </div>

      <div className="symbol">
        <p>{item.symbol}</p>
      </div>
      <div className="current-price">
        <p>${Math.floor(item.current_price)} </p>
      </div>

      <div
        className="price-percent"
        style={{
          color: item.price_change_percentage_24h < 0 ? "red" : "green",
        }}
      >
        <p>{Math.floor(item.price_change_percentage_24h)} %</p>
      </div>
      <div className="market-cap">
        <p>{item.market_cap}</p>
      </div>
    </div>
  ));

  return (
    <div className="main-section">
      {load ? (
        <div className="img-load">
          <img src={loadImage} alt="loading" />
        </div>
      ) : (
        coinDetails
      )}
    </div>
  );
}

export default Content;
