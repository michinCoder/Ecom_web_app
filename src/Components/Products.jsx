import styled from "styled-components";
import { PopularItems } from "../Data";
import Product from "./Product";

const Container = styled.div`
padding: 2em;
// display: flex;
// flex-wrap: wrap;
`
const ContentWrap = styled.div`
padding: 2em;
display: flex;
flex-wrap: wrap;
`

const Products = () => {
  return (
    <Container>
      <h1 style={{textAlign: "center", textTransform: "uppercase"}}>Popular Items</h1>
      <ContentWrap>
        {PopularItems.map(item =>(
            <Product item= {item} key={item.id} />
        ))}
        </ContentWrap>
    </Container>
  )
}

export default Products