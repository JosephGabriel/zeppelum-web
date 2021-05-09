import React from "react";
import SpotlightMenu from "../../components/SpotlightMenu";
import CategoryCarousel from "../../components/CategoryCarousel";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <CategoryCarousel />
      <SpotlightMenu />
    </div>
  );
};

export default Home;
