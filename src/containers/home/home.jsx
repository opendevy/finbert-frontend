import React from "react";
import "./styles.css";
import Header from "../../components/header";
import Hloc from "../../components/hloc";
import Sentiment from "../../components/sentiment";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="layout-two-column">
        <div className="column">
          <Hloc />
          <Sentiment />
        </div>
        <div className="column">
          <Hloc />
          <Sentiment />
        </div>
      </div>
    </div>
  );
};

export default Home;
