import React from "react";

import { CarouselContainer, CategoryTitle, CarouselFlex } from "./style";
import { DATA } from "./data";

import CategoryCard from "../CategoryCard";

const CategoryCarousel = () => {
  return (
    <CarouselContainer>
      <CategoryTitle>Categorias</CategoryTitle>
      <CarouselFlex>
        {DATA.map(({ id, ...otherProps }) => (
          <CategoryCard {...otherProps} />
        ))}
      </CarouselFlex>
    </CarouselContainer>
  );
};

export default CategoryCarousel;
