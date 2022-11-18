import React, { useState } from "react";
import "./styles.css";

const Hloc = () => {
  const [symbol, setSymbol] = useState("");
  const handleSearchButtonClick = () => {
    console.log(symbol);
  };
  return (
    <div className="hloc">
      <div className="form">
        <div className="form-info">
          <h1>HLOC</h1>
          <p>Please enter S&P500 symbol to get</p>
          <p>High, Lows, Open, Close</p>
          <label className="label" htmlFor="symbol-input">
            Enter S&P Symbol
          </label>
          <input
            id="symbol-input"
            type="text"
            value={symbol}
            onChange={(event) => setSymbol(event.target.value)}
          />
          <div className="search-button">
            <button onClick={handleSearchButtonClick}>Search</button>
          </div>
        </div>
        <div className="info">
          <h1>{symbol}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hloc;
