import { Send} from "@material-ui/icons";
import styled from "styled-components";

// adding responsive to pages
import {mobile} from '../Responsive'

const Component = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
${mobile({fontSize: "38px"})}
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({textAlign: "center",fontSize: "18px", width: "80%"})}
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({width: "80%"})}
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white
`;

const Newsletter = () => {
  return (
    <Component>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder="Your email" />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Component>
  )
}

export default Newsletter