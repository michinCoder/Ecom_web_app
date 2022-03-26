import styled from 'styled-components';
import bag from '../Images/register-bg.jpg'

// adding responsive to pages
import {mobile} from '../Responsive'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(225, 225, 225, 0.5), rgba(225, 225, 225, 0.5)), url(${bag});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
width: 24%;
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
flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 0;
padding: 10px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin: 10px 0;
`;
const Link = styled.a`
margin: 8px 0px;
font-size: 14px;
text-decoration: underline;
cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="name" ></Input>
                <Input placeholder="password" ></Input>
                <Button>Login</Button>
                <Link>Do you not remember the password?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login