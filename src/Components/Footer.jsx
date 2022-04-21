import { GitHub, LinkedIn } from '@material-ui/icons'
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import styled from 'styled-components'
import { mobile } from "../responsive";
const Container = styled.div`

display:flex;
margin-top:20px;
${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`
const Logo = styled.h1`

`
const Desc = styled.p`
margin:20px 0px;
font-size:30px
font-weight:500;
`
const SocialContainer = styled.h1`
display:flex;

`
const SocialIcon = styled.a`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=> props.color};
display:flex;
justify-content:center;
align-items:center;
margin-right:20px;
`
const Center = styled.div`
flex:1;
 padding: 20px;
 ${mobile({ display: "none" })};

`
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:fleX;
flex-wrap: wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom: 10px;

`
const Right = styled.div`
flex:1;
padding:20px;
${mobile({ backgroundColor: "#fff8f8" })};

`

const ContactItem= styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const Payment= styled.img`
width:50%;
`



const Footer = () => {
  return (
    <Container>
<Left>
    <Logo>LAMA.</Logo>
    <Desc> Hola soy lucas!, soy un desarrollador Full-stack orientado al Front-End en este proyecto te muestro mis habilidades de maquetado web y flujo de la pagina.
      <p>
        en otro update conectare con node y una base de datos en mongoDB, Espera el update! espero te guste.
        </p>
   <p>
     Presionando los iconos puedes acceder a mas informacion y contacto sobre mí.
     </p> 
    </Desc>
        <SocialContainer>
            <SocialIcon color='3B5999'  href='https://www.linkedin.com/in/lucasduran33/' target="_blank">
                
                <LinkedIn />

            </SocialIcon  >
            <SocialIcon color='000'  href='https://github.com/lucasduran33' target="_blank"> 
                <GitHub/>
            </SocialIcon>
            <SocialIcon color='55ACEE'  href='https://lucas-duran-portfolio.vercel.app/' target="_blank">
                <WorkIcon/>
            </SocialIcon>
        </SocialContainer>
</Left>

<Center>
    <Title>Recursos usados:</Title>
<List>
<ListItem>React</ListItem>
          <ListItem>Styled Components</ListItem>
          <ListItem>UI icons</ListItem>
          <ListItem>Vite</ListItem>
          <ListItem>Responsive</ListItem>


        </List>
</Center>
<Right>
<ContactItem>
    <MailOutlineIcon style={{marginRight:"10px"}}/>
  lucasaduranlopez@gmail.com
    </ContactItem>
    <ContactItem>
   
    <PhoneIcon style={{marginRight:"10px"}}/>
  +54 385 435 2773
    </ContactItem>
    <ContactItem>
    <LocationOnIcon style={{marginRight:"10px"}}/>
     Santiago Del Estero, Argentina
    </ContactItem>
<Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
</Right>
    </Container>
  )
}

export default Footer