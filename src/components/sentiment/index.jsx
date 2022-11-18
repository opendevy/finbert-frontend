import React, { useState } from "react";
import httpService from "../../services/http.service";
import responseJson from "./mock/response.json";
import "./styles.css";

const Sentiment = () => {
  const [query, setQuery] = useState("");
  const [days, setDays] = useState(2);
  const [limit, setLimit] = useState(5);
  const [response, setResponse] = useState(null);
  const handleSearchButtonClick = async (event) => {
    const data = (
      await httpService.get(`/news-analysis/${query}/${days}/${limit}`)
    ).data;
    setResponse(data);
  };

  return (
    <div className="sentiments">
      <div className="form">
        <div className="form-info">
          <h1>Sentiment</h1>
          <p>Search Sentiments in News</p>
          <div className="row-input">
            <label className="label" htmlFor="query-input">
              Search
            </label>
            <input
              id="query-input"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="row-input">
            <label className="label" htmlFor="newspaper-limit">
              News Papers Limit
            </label>
            <input
              id="newspaper-limit"
              type="number"
              value={limit}
              onChange={(event) => setLimit(event.target.value)}
              min={0}
              max={30}
              step={1}
            />
          </div>
          <div className="search-button">
            <button onClick={handleSearchButtonClick}>Search</button>
          </div>
        </div>
        <div className="info">
          {response && (
            <table className="table">
              <tbody>
                {console.log(response)}
                {response.map((item, id) => (
                  <tr className="tr" key={id}>
                    <td className="td">{item[0][0]}</td>
                    <td className="td">{item[1][0].label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
