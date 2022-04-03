import { Link } from "react-router-dom";
import styled from "styled-components";

// adding responsive to pages
import {mobile} from '../Responsive'

const Container = styled.div`
flex: 1;
margin: 3em;
height: 70vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height: "40vh"})}
`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-color: rgba(0,0,0, .5);
`;
const Title = styled.h1`
color: white;
margin-bottom: .5em;
text-align: center;
`;
const Button = styled.button`
border: none;
outline: none;
background-color: white;
color: gray;
cursor: pointer;
padding: 10px;
font-weight: 600;
`;

const CategoryITEM = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to="/productlist"><Button>SHOP NOW</Button></Link>
      </Info>
    </Container>
  )
}

export default CategoryITEM