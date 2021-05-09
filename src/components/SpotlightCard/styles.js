import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const spotlightHeight = css`
  height: 100%;
  background-color: #000;
  grid-area: spotlight;
`;

const regularCard = css`
  background-color: #333;
`;

const getSpotlightHeight = (props) => {
  if (props.spotlight) {
    return spotlightHeight;
  }

  return regularCard;
};

const getIndex = ({ index }) => {
  if (index) {
    return css`
      grid-area: ${"card" + index};
    `;
  }

  return regularCard;
};

export const Card = styled(Link)`
  width: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 0.7rem;
  overflow: hidden;
  ${getSpotlightHeight}
  ${getIndex}
`;

export const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  p {
    font-size: 1.6rem;
    color: white;
  }
`;
