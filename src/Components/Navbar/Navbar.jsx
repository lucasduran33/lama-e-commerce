import React from 'react'
import styled from 'styled-components'
import {Search} from '@material-ui/icons'
import Badge from '@mui/material/Badge';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../../responsive'
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Lenguaje = styled.button`
  font-size: 14px;
  cursor: pointer;
  background:none;
border: 0px;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border:none;
  outline: none;
  
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  text-decoration:none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.button`
background:none;
border: 0px;
  font-size: 14px;
  font-weight:700;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                  <StyledLink to='/' >
                <Lenguaje>
                <HomeOutlinedIcon/>
                </Lenguaje>
                  </StyledLink>
                <SearchContainer>
                    <Input placeholder='Search...'/>
                   <Search style={{color:'gray', fontSize:16}}/>
                </SearchContainer>
            </Left>
              

            <Center>
                <Logo>LAMA.</Logo>
                </Center>

            
            <Right>

                <StyledLink to='/register'  >
                <MenuItem>
                    Register
                </MenuItem>
                </StyledLink>
<StyledLink to='/login' >

                <MenuItem>
                SIGN IN
                </MenuItem>
</StyledLink>

                <MenuItem>
<Link to='/Cart'  style={{ textDecoration: 'none'}}>
                <Badge badgeContent={2} color="primary">
      <ShoppingCartOutlinedIcon color="action" />
    </Badge>
</Link>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

export default Navbar