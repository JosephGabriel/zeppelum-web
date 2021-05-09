import React from "react";

import {
  HeaderContainer,
  HeaderTitle,
  HeaderDiv,
  HeaderDescription,
  HeaderDescriptionContainer,
  HeaderButton,
  HeaderActionButton,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDiv>
        <HeaderDescriptionContainer>
          <HeaderTitle>Zeppelum</HeaderTitle>
          <HeaderDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, cum tempora aliquid recusandae voluptatem sapiente
            voluptatibus excepturi unde iste a quidem deserunt blanditiis facere
            voluptatum magnam. Cupiditate aut totam necessitatibus?
          </HeaderDescription>
          <HeaderButton>Hover</HeaderButton>
          <HeaderActionButton>Hover</HeaderActionButton>
        </HeaderDescriptionContainer>
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default Header;
