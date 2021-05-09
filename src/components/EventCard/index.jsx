import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  EventContainer,
  EventAvaliable,
  EventButton,
  EventImage,
  EventImageContainer,
  EventPrice,
  EventReviewContainer,
  EventTitle,
  EventBodyContainer,
  EventType,
  EventData,
  EventWishButton,
} from "./styles";

const EventCarousel = (props) => {
  const { type, avaliable, review, price, date, title, url } = props;
  return (
    <EventContainer>
      <EventWishButton>
        <AiOutlineHeart color="#000" />
      </EventWishButton>
      <EventImageContainer>
        <EventImage src={url} />
      </EventImageContainer>

      <EventBodyContainer>
        <EventTitle>{title}</EventTitle>

        <EventType>{type}</EventType>

        <EventData> {date}</EventData>

        <EventPrice>R${price}</EventPrice>

        <EventButton>Adicionar ao carrinho</EventButton>
      </EventBodyContainer>
    </EventContainer>
  );
};

export default EventCarousel;
