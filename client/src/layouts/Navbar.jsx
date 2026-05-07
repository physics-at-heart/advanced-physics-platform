import { useState } from 'react';
import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [expanded, setExpanded] = useState(false);
  return (
    <BsNavbar expand="lg" sticky="top" className="bg-white shadow-sm py-2">
      <Container>
        <BsNavbar.Brand as={Link} to="/"><img src={logo} alt="Logo" height="40" /></BsNavbar.Brand>
        <BsNavbar.Toggle onClick={() => setExpanded(!expanded)}>{expanded ? <FiX /> : <FiMenu />}</BsNavbar.Toggle>
        <BsNavbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/modules/module1">Modules</Nav.Link>
            <Nav.Link as={Link} to="/practical-lab">Lab</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/quiz-center">Quizzes</Nav.Link>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Button variant="outline-primary" size="sm" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Button as={Link} to="/register" variant="primary" size="sm">Sign Up</Button>
              </>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};
export default Navbar;
