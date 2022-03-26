import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

// adding responsive to pages
import {mobile} from '../Responsive'

const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
`
const Wrapper = styled.div`
padding: 10px 30px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding: "10px 0px"})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}
`
const SearchComponent = styled.div`
border: .5px solid grey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
outline: none;
${mobile({width: "50px"})}
`
const Center = styled.div`
flex: 1;
text-align: center
`
const Logo = styled.h1`
font-weight: bold;
color: black;
${mobile({fontSize: "24px"})}
`
const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
${mobile({justifyContent: "center", flex: 2})}
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
color: black;
${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchComponent>
                    <Input placeholder='search'/>
                    <Search style={{color: "grey", fontSize: "16px"}} />
                </SearchComponent>
            </Left>
            <Center><Link to="/" style={{textDecoration: "none"}}><Logo>MEERA.</Logo></Link></Center>
            <Right>
                <Link to="/register" style={{textDecoration: "none"}}><MenuItem>Register</MenuItem></Link>            
                <Link to="/register" style={{textDecoration: "none"}}><MenuItem>Sign In</MenuItem></Link>
                <MenuItem>
                <Badge badgeContent={2} color="secondary">
                    <Link to="/cart" style={{textDecoration: "none", color: "black"}}><ShoppingCartOutlined /></Link>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar