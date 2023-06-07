import { useRouter } from 'next/router.js';
// import {Nav, NavA} from '../../../styles/nav_css.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar2() {
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
  const moveDetail = () => {
    router.push("/details")
  }
  const moveGuide = () => {
    router.push("/guide")
  }
  const moveTest = () => {
    router.push("/test")
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img src='https://avatars.githubusercontent.com/u/133766039?s=200&v=4' width={60} height={60} onClick={moveHome}></img>
        <Navbar.Brand onClick={moveHome}>  CoPet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={moveGuide}>GUIDE</Nav.Link>
            <Nav.Link onClick={moveDetail}>UPLOAD</Nav.Link>
            <Nav.Link onClick={moveTest}>TEST</Nav.Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
