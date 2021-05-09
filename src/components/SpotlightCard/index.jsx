import React from "react";

import { Card, Footer } from "./styles";

const SpotlightCard = ({ img, spotlight, index, title, route }) => {
  return (
    <Card
      spotlight={spotlight}
      style={{ backgroundImage: `url(${img})` }}
      index={index}
      to={route}
    >
      <Footer>
        <p>{title}</p>
      </Footer>
    </Card>
  );
};

export default SpotlightCard;
