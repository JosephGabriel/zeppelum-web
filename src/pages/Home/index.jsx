import React from "react";
import SpotlightMenu from "../../components/SpotlightMenu";
import CategoryCarousel from "../../components/CategoryCarousel";
import Header from "../../components/Header";
import EventCarousel from "../../components/EventCarousel";

const Home = () => {
  return (
    <div>
      <Header />
      <CategoryCarousel />
      <SpotlightMenu />
      <EventCarousel />
    </div>
  );
};

export default Home;
