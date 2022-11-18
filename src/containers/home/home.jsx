import React from "react";
import "./styles.css";
import Header from "../../components/header";
import Hloc from "../../components/hloc";
import Sentiment from "../../components/sentiment";

const Home = () => {
  return (
    <div>
      <Header />
      <Hloc />
      <Sentiment />
    </div>
  );
};

export default Home;
