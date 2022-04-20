import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#" className='text-center' >Todo</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
    )
}

export default Header;