import styled from 'styled-components'
import { mobile } from "../../responsive";

const Container = styled.div`
width:100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)

), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
`
const Wrapper = styled.div`
width:25%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}

`
const Title = styled.h1`
font-size:34px;
`
const Form = styled.form`
display:flex;
flex-direction:column;
`
const Input = styled.input`
flex:1;
min-width: 40%;
margin:20px 10px 20px ;
padding:10px;

`


const Button = styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background-color: teal;
color:white;
margin:10px;
margin-bottom:10px;

`
const Forgotp = styled.a`
margin:5px;
font-size:12px;
font-weight:600;
text-decoration: underline;
cursor:pointer;
`


const Login = () => {
  return (
<Container>
<Wrapper>
<Title>Create an account</Title>
<Form>
<Input placeholder='Name'/>
<Input placeholder='Password'/>

<Button>LOG IN</Button>
<Forgotp>DO NOT YOU REMEMBER THE PASSWORD?</Forgotp>
<Forgotp>CREATE NEW ACCOUNT</Forgotp>

</Form>
</Wrapper>


</Container>  
)

}

export default Login