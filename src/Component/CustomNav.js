import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function CustomNav() {
    return (  
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#"    > <Link to='/'  style={{textDecoration:'none' ,color:'white'}} > Home</Link></Nav.Link>
            <Nav.Link href="#features">  <Link to='/aboutus' style={{textDecoration:'none' ,color:'white'}} > About us</Link>  </Nav.Link>
         
          </Nav>
        </Container>
      </Navbar>
        
        </>
    );
}

export default CustomNav;