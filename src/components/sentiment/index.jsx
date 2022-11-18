import React, { useState } from "react";
import httpService from "../../services/http.service";
import responseJson from "./mock/response.json";
import "./styles.css";

const Sentiment = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(responseJson);
  const handleSearchButtonClick = async (event) => {
    console.log(event);
  };

  return (
    <div className="sentiments">
      <div className="form">
        <div className="form-info">
          <h1>Sentiment</h1>
          <p>Search Sentiments in News</p>
          <label className="label" htmlFor="query-input">
            Search
          </label>
          <input
            id="query-input"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="search-button">
            <button onClick={handleSearchButtonClick}>Search</button>
          </div>
        </div>
        <div className="info">
          {response && (
            <table className="table">
              {console.log(response)}
              {response.map((item, id) => (
                <tr key={id}>
                  <td>{item[0][0]}</td>
                  <td>{item[1][0].label}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
