import React, { useState } from "react";
import httpService from "../../services/http.service";
import "./styles.css";

const Hloc = () => {
  const [symbol, setSymbol] = useState("");
  const [dailyData, setDailyData] = useState({
    title: null,
    high: null,
    low: null,
    close: null,
    open: null,
    volume: null,
  });
  const handleSearchButtonClick = async () => {
    const data = (await httpService.get(`stocks/${symbol}/1d`)).data.response;
    console.log(symbol);
    console.log(data);
    setDailyData({
      title: symbol,
      open: data[1][0],
      high: data[1][1],
      low: data[1][2],
      close: data[1][3],
      volume: data[1][4],
    });
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
          {dailyData.title && (
            <div className="info-data">
              <h1>{dailyData.title}</h1>
              <div className="info-data-row">
                <label className="label" htmlFor="symbol-input">
                  Open
                </label>
                <input
                  type="text"
                  value={`$ ${dailyData.open}`}
                  disabled={true}
                />
              </div>
              <div className="info-data-row">
                <label className="label" htmlFor="symbol-input">
                  Close
                </label>
                <input
                  type="text"
                  value={`$ ${dailyData.close}`}
                  disabled={true}
                />
              </div>
              <div className="info-data-row">
                <label className="label" htmlFor="symbol-input">
                  High
                </label>
                <input
                  type="text"
                  value={`$ ${dailyData.high}`}
                  disabled={true}
                />
              </div>
              <div className="info-data-row">
                <label className="label" htmlFor="symbol-input">
                  Low
                </label>
                <input
                  type="text"
                  value={`$ ${dailyData.low}`}
                  disabled={true}
                />
              </div>
              <div className="info-data-row">
                <label className="label" htmlFor="symbol-input">
                  Volume
                </label>
                <input type="text" value={dailyData.volume} disabled={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hloc;
