import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
  height: 8rem;
  width: 8rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
  padding: 1.5rem;
  overflow: hidden;
  border-radius: 0.7rem;
  filter: grayscale(100%);
  margin-bottom: 5rem;

  &:hover {
    filter: grayscale(0%);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
  }
`;

export const CardFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;

  &:first-child {
    margin-left: 0rem;
  }

  &:last-child {
    margin-right: 0rem;
  }
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.p`
  margin: 1rem 0;
  font-size: 1.6rem;
`;
