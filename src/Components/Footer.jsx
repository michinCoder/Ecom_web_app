import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import paymentImg from '../Images/payment.png';

// adding responsive to pages
import {mobile} from '../Responsive'

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 1em;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none"})}
`;
const Title = styled.h3`
margin-bottom: 2em;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
// flex-direction: column;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor: "#eee"})}
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment = styled.img`
width: 50%;

`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MEERA.</Logo>
            <Desc>Pack it up! We’re deploying to Happy Package in the morning, and you need to find a bag big enough for the essentials with extra space for a small teddy-bear like lifeform.</Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Return Policy</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "1em"}} /> 62 Street, St. Pale South 678990</ContactItem>
            <ContactItem><Phone style={{marginRight: "1em"}} /> +91 8573625267</ContactItem>
            <ContactItem><MailOutline style={{marginRight: "1em"}} /> shopatdoor@shopify.com</ContactItem>
            <Payment  src={paymentImg}/>
        </Right>
    </Container>
  )
}

export default Footer