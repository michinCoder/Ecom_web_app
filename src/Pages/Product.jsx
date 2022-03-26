import React from 'react';
import styled from "styled-components";
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Newletter from '../Components/Newsletter';
import { Add, Remove } from '@material-ui/icons';

// adding responsive to pages
import {mobile} from '../Responsive'

const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding: "10px", flexDirection: "column", justifyContent: "center", alignItems: "center" })}
`;
const ImgContainer = styled.div`
flex: 1;
${mobile({padding: "10px"})}
`;
const Image = styled.img`
width: 90%;
height: 100vh;
object-fit: cover;
${mobile({height: "40vh"})}
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;
const Title = styled.h1`
font-weight: 200;
`;
const Desc = styled.p`
margin: 20px 0px
`;
const Price = styled.span`
font-weight: 100;
font-size: 2em;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width: "100%"})}
`;
const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px .3em;
cursor: pointer;
`;
const FilterSize = styled.select`
margin-left: 1em;
padding: .3em .5em;

`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between; 
${mobile({width: "100%"})}
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 1em; 
`;
const Button = styled.button`
padding: 15px;
color: white;
background-color: teal;
cursor: pointer;
outline: none;
border: none;
font-weight: 500;
transition: .3s all ease;

&:hover{
  transform: scale(1.01);
  background-color: white;
  color: teal;
  border: 2px solid teal;
  font-weight: 600;
}
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://img.ltwebstatic.com/images3_pi/2021/07/26/1627284495a88fe82ec1f4d5751e4395a3f3179306.webp" />
        </ImgContainer>
        <InfoContainer>
          <Title>Ribbed Straight Denim Jeans</Title>
          <Desc>5-pocket jeans in indigo denim from pure stretch cotton, garment-treated for an almost worn effect. The garment features a low waist and regular fit, with a cropped hem and contrast stitching.</Desc>
          <Price>Rs. 599</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color= "black"/>
              <FilterColor color= "darkblue" />
              <FilterColor color= "lightblue" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newletter />
      <Footer />
    </Container>
  )
}

export default Product