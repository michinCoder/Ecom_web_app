import styled from 'styled-components';
import bag from '../Images/register-bg.jpg'

// adding responsive to pages
import {mobile} from '../Responsive'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(225, 225, 225, 0.5), rgba(225, 225, 225, 0.5)), url(${bag});
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
${mobile({width: "75%"})}
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`;
const Form = styled.form`
display: flex;
// justify-content: center;
// align-items: center;
flex-wrap: wrap;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
`;
const Aggrement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" ></Input>
                <Input placeholder="last name" ></Input>
                <Input placeholder="username" ></Input>
                <Input placeholder="email" ></Input>
                <Input placeholder="password" ></Input>
                <Input placeholder="confirm password" ></Input>
                <Aggrement>By creating an account, I consent to the processing of my personal data in accordance with <b>PRIVACY POLICY</b>.</Aggrement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register