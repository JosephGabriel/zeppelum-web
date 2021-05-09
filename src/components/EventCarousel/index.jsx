import React, { useState } from "react";

import EventCard from "../EventCard";
import { DATA } from "./data";
import {
  EventCarouselContainer,
  EventCarouselTitle,
  Container,
} from "./styles";

const EventCarousel = () => {
  const [event] = useState(DATA);
  return (
    <Container>
      <EventCarouselTitle>Eventos em Alta</EventCarouselTitle>
      <EventCarouselContainer>
        {event.map(({ id, ...otherProps }) => (
          <EventCard key={id} {...otherProps} />
        ))}
      </EventCarouselContainer>
    </Container>
  );
};

export default EventCarousel;
