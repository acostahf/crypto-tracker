import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";
import { makeStyles } from "@material-ui/core/styles";

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

const useStyles = makeStyles((theme) => ({
  coinApp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "64px",
    backgroundColor: "#212121",
    color: "#ffffff",
  },
  coinSearch: {
    marginBottom: "64px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  coinText: {
    marginBottom: "32px",
    textAlign: "center",
  },
  coinInput: {
    paddingLeft: "16px",
    width: "300px",
    height: "50px",
    borderRadius: "4px",
    border: "none",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    color: "#e2e2e2",
  },
}));

function App() {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="App">
      <div className={classes.coinApp}>
        <div className={classes.coinSearch}>
          <h1 className={classes.coinText}> Search a Crypto Currency</h1>
          <form>
            <input
              type="text"
              placeholder="search"
              className={classes.coinInput}
              onChange={handleChange}
            />
          </form>
        </div>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.total_volume}
              symbol={coin.symbol}
              volume={coin.market_cap}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
