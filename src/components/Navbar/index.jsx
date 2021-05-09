import React from "react";
import { IoMdNotificationsOutline, FaSearch } from "react-icons/all";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
  NavbarContainer,
  NavbarHolder,
  LogoContainer,
  NavContainer,
  NavLink,
  SearchBoxInput,
  SearchBoxContainer,
} from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarHolder>
        <LogoContainer to="/">
          <Logo width="55px" height="55px" />
        </LogoContainer>

        <SearchBoxContainer>
          <SearchBoxInput type="search" placeholder="Pesquisar" />
          <AiOutlineSearch color="#333" size="1.2rem" />
        </SearchBoxContainer>

        <NavContainer>
          <NavLink href="">
            <IoMdNotificationsOutline size="2rem" />
          </NavLink>

          <NavLink href="">
            <AiOutlineHeart size="2rem" />
          </NavLink>

          <NavLink href="">
            <AiOutlineShoppingCart size="2rem" />
          </NavLink>

          <NavLink href="">
            <AiOutlineUser size="2rem" />
          </NavLink>
        </NavContainer>
      </NavbarHolder>
    </NavbarContainer>
  );
};

export default Navbar;
