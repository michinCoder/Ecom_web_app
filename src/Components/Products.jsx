import styled from "styled-components";
import { PopularItems } from "../Data";
import Product from "./Product";

const Container = styled.div`
padding: 2em;
display: flex;
flex-wrap: wrap;

`

const Products = () => {
  return (
    <Container>
        {PopularItems.map(item =>(
            <Product item= {item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products