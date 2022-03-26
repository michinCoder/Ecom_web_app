import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0px;
left: 0px;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all .5s ease;
cursor: pointer;
`
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 300px;
height: 350px;
background-color: #f5fbfd;
display: flex;
justify-content: center;
align-items: center;
position: relative;

&:hover ${Info}{
    opacity: 1;
}
`
const Image = styled.img`
height: 75%; 
object-fit: cover;
z-index: 2;
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: .5em;
transition: all .3s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product