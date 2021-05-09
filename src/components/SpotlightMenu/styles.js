import styled from "styled-components";

export const SpotlightGrid = styled.div`
  height: 500px;
  width: 90%;
  margin: auto;
  margin-top: 3rem;
  overflow: hidden;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "spotlight card1"
    "spotlight card1"
    "spotlight card2"
    "spotlight card2";
`;
