import React, { useState } from "react";

import { DATA } from "./data";
import { SpotlightGrid } from "./styles";

import SpotlightCard from "../SpotlightCard";

const SpotlightMenu = () => {
  const [menu] = useState(DATA);
  console.log(menu);
  return (
    <SpotlightGrid>
      {menu.map(({ id, ...otherProps }, index) => (
        <SpotlightCard key={id} {...otherProps} index={index} />
      ))}
    </SpotlightGrid>
  );
};

export default SpotlightMenu;
