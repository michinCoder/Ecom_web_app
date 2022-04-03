import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from "styled-components";
import { SlideItems } from '../Data';

// adding responsive to pages
import {mobile} from '../Responsive'

const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({display: "none"})}
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === 'left' && "10px"};
right: ${props => props.direction === 'right' && "10px"};
margin: auto;
cursor: pointer;
opacity: .5;
z-index: 999;
`
const Wrapper = styled.div`
position: absolute;
min-height: 60vh;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.SlideIndex * -100}vw);
background-color: #1654A8
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: ${props => props.bg}
`
const ImgContainer = styled.div`
flex: 1;
height: 100%;
`
const Image = styled.img`
height: 80%
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`

const Title = styled.h1`
font-size: 4em;
text-transform: uppercase;
`
const Desc = styled.p`
margin: 30px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: .2em;
width: 20em;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer
`

const Slider = () => {

    const [SlideIndex, setSlideIndex ] = useState(0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(SlideIndex > 0 ? SlideIndex-1 : 2)
        }
        else{
            setSlideIndex(SlideIndex < 2 ? SlideIndex+1 : 0)
        }
    }
    
setInterval(handleClick, 5000);

  return (
    <Container>
        <Arrow direction= "left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper SlideIndex={SlideIndex}>

            {SlideItems.map(item => (
                <Slide bg= {item.bg} key={item.id}>
                <ImgContainer>
                    <Image src= {item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            ))}            

        </Wrapper>
        <Arrow direction= "right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider