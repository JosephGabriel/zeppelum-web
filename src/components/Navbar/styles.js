import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  position: sticky;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 65px;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  ${FlexCenter}
`;

export const NavbarHolder = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const LogoContainer = styled(Link)`
  width: 50px;
  height: 50px;
`;

export const NavContainer = styled.div`
  padding: 0px;
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  color: #000;
  margin: 0px;
  text-decoration: none;
  margin-left: 4rem;

  &:first-child {
    margin-left: 0;
  }
`;

export const SearchBoxContainer = styled.div`
  width: 50%;
  height: 3rem;
  border: 1px solid #888;
  padding: 0 2rem;
  border-radius: 5rem;
  ${FlexCenter}
  justify-content:space-between;
  overflow: hidden;

  svg {
    height: 100%;
    width: 1.6rem;
    padding: 0rem;
    cursor: pointer;
  }
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  height: 50%;
  background: transparent;
  border: 0;
  color: #333;
  outline-style: none;
  font-size: 1.8rem;

  &::placeholder {
    color: #000;
  }
`;
