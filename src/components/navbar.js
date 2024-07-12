import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import navicon1 from '../images/icons8-linkedin-2-50.png'  
import instaicon from '../images/icons8-instagram-50.png'
import githubicon from '../images/icons8-github-50.png'   
function Navbari(){
  const [activelink,setactivelink]=useState('home');
  const[scrol,setscroll]=useState(false);
  useEffect(()=>{
const onscroll=()=>{
  if(window.scrollY>50){
    setscroll(true);
}
else{
  setscroll(false);
}
  }
  window.addEventListener("scroll",onscroll);
return ()=>window.removeEventListener("scroll",onscroll);
},[])
 const onupdateactivelink=(value)=>{

setactivelink(value);
 }

  return(
    <Navbar expand="lg" className={scrol?"scrolled":""}>
    <Container>
      <Navbar.Brand href="#home"><img src={''} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" > <span className="navbar-toggler-icon"></span>  </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activelink==='home'?'active navbar-link':'navbar-link' } onClick={ ()=>onupdateactivelink('home')}>Home</Nav.Link>
          <Nav.Link href="#about" className={activelink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onupdateactivelink('about')}>About</Nav.Link>
          <Nav.Link href="#skills" className={activelink==='skills'?'active navbar-link':'navbar-link'}onClick={ ()=>onupdateactivelink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activelink==='projects'?'active navbar-link':'navbar-link'}onClick={ ()=>onupdateactivelink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/tanmay-parashar-31432b263/"><img src={navicon1}alt="" /></a>
            <a href="https://www.instagram.com/tanmayparashar31/"><img src={instaicon}alt="" /></a>
            <a href="https://github.com/tanmaycd"><img src={githubicon}alt="" /></a>
          </div>
          <button className="vvd" onClick={()=>console.log('connect')}> <span>Let's Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default Navbari


