import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  coinContainer: {
    display: "flex",
    justifyContent: "center",
  },
  coinRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    height: "80px",
    borderBottom: "solid",
    width: "900px",
  },
  coin: {
    display: "flex",
    alignItems: "center",
    paddingRight: "24px",
    minWidth: "300px",
    color: "#fff",
  },
  h1: {
    fontSize: "16px",
    width: "150px",
  },
  img: {
    height: "30px",
    width: "30px",
    marginRight: "10px",
  },
  symbol: {
    textTransform: "uppercase",
    width: "80px",
  },
  data: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    width: "80px",
  },
  volume: {
    width: "230px",
  },
  marketcap: {
    width: "230px",
  },
  percentPos: {
    width: "80px",
    color: "green",
  },
  percentNeg: {
    width: "80px",
    color: "red",
  },
}));

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.coinContainer}>
      <div className={classes.coinRow}>
        <div className={classes.coin}>
          <img className={classes.img} src={image} alt="crypto" />
          <h1 className={classes.h1}>{name}</h1>
          <p className={classes.symbol}>{symbol}</p>
          <div className={classes.data}>
            <p className={classes.price}>${price}</p>
            <p className={classes.volume}>${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className={classes.percentPos}>{priceChange.toFixed(2)}% </p>
            ) : (
              <p className={classes.percentNeg}>{priceChange.toFixed(2)} %</p>
            )}
            <p className={classes.marketcap}>
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
