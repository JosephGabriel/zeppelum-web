import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url("https://blog.rocketseat.com.br/content/images/2019/03/Iniciando_com_GraphQL_no_NodeJS_e_ExpressJS.png");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderDiv = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
`;

export const HeaderDescriptionContainer = styled.div`
  width: 50%;
`;

export const HeaderTitle = styled.h2`
  font-size: 4rem;
  color: white;
  margin-bottom: 1rem;
`;

export const HeaderDescription = styled.p`
  font-size: 1.6rem;
  max-width: 90%;
  color: white;
  margin-bottom: 2rem;
`;

export const HeaderButton = styled.button`
  background-color: #333;
  color: white;
  margin-right: 2rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  padding: 1rem 4rem;
  border: none;
  cursor: pointer;
`;

export const HeaderActionButton = styled.button`
  background-color: #fff;
  color: #333;
  text-transform: uppercase;
  font-size: 1.6rem;
  padding: 1rem 4rem;
  border: none;
  cursor: pointer;
`;
