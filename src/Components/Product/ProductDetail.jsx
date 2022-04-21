import React from 'react'
import styled from 'styled-components'
import Anuncio from '../Anuncio/Anuncio'
import Navbar from '../Navbar/Navbar'
import NewsLetter from '../NewsLetter'
import Footer from '../Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from "../../responsive";
const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display:flex;
${mobile({ padding: "10px", flexDirection:"column" })}
`

const ImgContainer = styled.div`
flex:1;
padding: 0px 50px;

`
const InfoContainer = styled.div`
flex:1;
${mobile({ padding: "10px" })};

;`
const Title = styled.h1`
font-weight: 200;`
const Desc = styled.p`
margin:20px;
`
const Price = styled.span`
font-weight:300;
font-size:40px;
`

const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({ height: "40vh" })};

`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;

display:flex;
justify-content: space-between
${mobile({ width: "100%" })}
`
const Filter = styled.div`
display:flex;
align-items:center;
`

const FilterTitle = styled.span`
font-size:20px;
font-weight: 200;
`

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${(props)=>props.color};
margin:0px 5px;
cursor:pointer;
`

const FilterSize = styled.select`
margin-left:10px;
padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between; 
${mobile({ width: "100%" })};
`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-size:30px;
font-weight:1000;

`
const Amount = styled.span` 
width:30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display:flex;
align-items:center;
justify-content: center;
margin:0px 5px
`
const Button = styled.button`
Padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
color:black;
font-weight:1000;
&:hover{
  background-color:#f8f4f4;
}
`


const ProductDetail = () => {
  return (
 <Container>
     <Navbar/>
     <Anuncio/>
     <Wrapper>
       <ImgContainer>
      <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/> 
       </ImgContainer>
       <InfoContainer>
<Title>Denim Jumpsiut</Title>
<Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error possimus aperiam, molestiae in quisquam, sapiente reprehenderit blanditiis sunt dolorem corporis architecto amet exercitationem, nemo repellat? Pariatur culpa hic distinctio facilis.</Desc>
<Price>$20</Price>
<FilterContainer>
  <Filter>
  <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
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
    <Remove/>
    <Amount>1</Amount>
    <Add/>

  </AmountContainer>
  <Button>ADD TO CART</Button>
</AddContainer>
       </InfoContainer>
     </Wrapper>
     <NewsLetter/>
    <Footer/>

 </Container>
  )
}

export default ProductDetail