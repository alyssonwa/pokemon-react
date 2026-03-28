import { Container, Nav, NavbarCollapse } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/contact">Pokémon</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contato</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
