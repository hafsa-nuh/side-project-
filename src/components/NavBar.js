import React from 'react';
import styled from 'styled-components';
import { FiMoon, FiUser } from "react-icons/fi";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: rgb(153, 173, 173);
  border-bottom: 5px solid rgb(153, 156, 156);
  z-index: 9;
  align-items: center;
  justify-content: space-between;
`;

const NavDiv = styled.div`
  padding: 10px 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  padding: 0.5rem;
  height: 60px;
  font-style: italic;
  text-transform: uppercase;
  font-weight: bolder;
  color: rgb(10, 10, 10);
  font-size: 2.4rem;
`;
const Span = styled.span`
  color: orange;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
`;
const Search = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  height: 5rem;
  overflow: hidden;
  margin-left: 10rem;
`;
const SearchBox = styled.input`
  width: 80%;
  height: 40px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid #f6f6f6;
  text-transform: uppercase;
  background-color: none;
  color: #a9a9a9;
  outline: none;
  ::placeholder {
    color: #141313;
  }
`;
const SearchBtn = styled.button`
  width: 5rem;
  height: 40px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #0c0b0b;
  color: white;
  text-transform: capitalize;
  font-size: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Menu = styled.div`
  div,
  a {
    margin-right: 1rem;
    margin-left: 2rem;
    font-size: 1.7rem;
    line-height: 4rem;
    background-color: black;
    justify-content: space-between;
    cursor: pointer;
    color: white;
    text-align: center;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }
  :hover {
    background-color: orange;
    color: #fff;
    transform: rotate(360deg);
  }
`;
const NavUl = styled.ul`
  width: 100%;
  display: flex;
  padding: 10px 10vw;
  justify-content: center;
  list-style: none;
  border-top: 1px solid #f1f0f0;
`;
const NavA = styled.a`
  text-transform: capitalize;
  padding: 0 10px;
  margin: 0 5px;
  text-decoration: none;
  color: #383838;
  opacity: 0.5;
  transition: 0.5s;
  font-size: 1.5rem;
  :hover{
    opacity: 1.5;
`;


function NavBar() {
  return (
    <>
      <Nav>
        <NavDiv>
          <Logo>
            Mulhimat
            <Span>~</Span>
          </Logo>
          <NavItem>
            <Search>
              <SearchBox placeholder="search product" type="text"></SearchBox>
              <SearchBtn>Search</SearchBtn>
            </Search>
            <Menu>
              <div>{FiMoon}</div>
              <a href={FiUser}>{FiUser}</a>
            </Menu>
          </NavItem>
        </NavDiv>
        <NavUl>
          <li>
            <NavA>Home</NavA>
          </li>
          <li>
            <NavA>Products</NavA>
          </li>
          <li>
            <NavA>Features</NavA>
          </li>
          <li>
            <NavA>Blog</NavA>
          </li>
          <li>
            <NavA>Reviews</NavA>
          </li>
        </NavUl>
      </Nav>
    </>
  );
}

export default NavBar