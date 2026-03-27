import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/contact">Pokémon</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
