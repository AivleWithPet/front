import { useRouter } from 'next/router.js';
// import {Nav, NavA} from '../../../styles/nav_css.js';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  const router = useRouter();

  const moveSignIn = () => {
    router.push("/login")
  }
  const moveSignUp = () => {
    router.push("/register")
  }
  const moveHome = () => {
    router.push("/")
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img src='https://avatars.githubusercontent.com/u/133766039?s=200&v=4' width={60} height={60} onClick={moveHome}></img>
        <Navbar.Brand onClick={moveHome}>CoPet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={moveHome}>기능1</Nav.Link>
            <Nav.Link onClick={moveHome}>기능2</Nav.Link>
            <NavDropdown title="기능들" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={moveHome}>Action</NavDropdown.Item>
              <NavDropdown.Item onClick={moveHome}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item onClick={moveHome}>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={moveHome}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={moveSignIn}>Sign in</Nav.Link>
            <Nav.Link eventKey={2} onClick={moveSignUp}>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
