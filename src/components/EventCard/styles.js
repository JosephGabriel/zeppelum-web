import styled from "styled-components";
import { Link } from "react-router-dom";

export const EventContainer = styled.div`
  width: 25rem;
  height: 30rem;
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  align-items: center;
  margin-bottom: 5rem;
`;

export const EventWishButton = styled.button`
  background: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 3rem;
  position: absolute;
  top: 0.5rem;

  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

export const EventBodyContainer = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const EventTitle = styled(Link)`
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4rem;
  color: black;
  text-decoration: none;
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
  font-weight: bold;
`;

export const EventButton = styled.button`
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  margin: auto;
  cursor: pointer;
`;

export const EventAvaliable = styled.span``;

export const EventData = styled.span`
  background: #333;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  padding: 0.3rem 1rem;
`;

export const EventType = styled.span`
  font-size: 1.2rem;
  margin: 0.3rem 0;
  color: #333;
  text-transform: capitalize;
`;

export const EventPrice = styled.span`
  color: #34b1eb;
  margin-top: 0.2rem;
  font-size: 1.6rem;
`;

export const EventReviewContainer = styled.div``;

export const EventImageContainer = styled.div`
  height: 50%;
  overflow: hidden;
`;

export const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
