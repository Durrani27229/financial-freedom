import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import { FaRegStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function NavScrollExample() {
  return (
    <Navbar expand="lg"  className='dark-navy mt-2'>
      <Container >
        {/* <Container> */}
        <Navbar.Brand href="#home">
            <img
              src="../../images/logo.png"
              width="102"
              height="32"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='header-text'>Home</Nav.Link>
            <Nav.Link href="#action2" className='header-text'>Docs</Nav.Link>
            <Nav.Link href="#action2" className='header-text'><FaDiscord className='mb-1 me-2 fs-5'/> Discord</Nav.Link>
            <Nav.Link href="#action2" className='header-text'><FaGithub className='mb-1 me-2 fs-5'/> Github</Nav.Link>
            <Nav.Link href="#action2" className='header-text'> <CiSearch className='mb-1 me-2 fs-5' /> Search</Nav.Link>
          </Nav>
          <Nav.Link href="#action2" className='header-text me-4' > <FaRegStar className='me-2 mb-1 fs-5' />Star on Github</Nav.Link>
            <Button variant="primary">Get Notified</Button>
        </Navbar.Collapse>
        </Container>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavScrollExample;