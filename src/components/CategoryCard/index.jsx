import React from "react";

import { CardContainer, CardImage, CardTitle, CardFlex } from "./style";

const CartegoryCard = ({ title, img }) => {
  return (
    <CardFlex>
      <CardContainer>
        <CardImage src={img} alt="Imagem de Categoria" />
      </CardContainer>
      {/* <CardTitle>{title}</CardTitle> */}
    </CardFlex>
  );
};

export default CartegoryCard;
