import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const links = [
    { to: '/dashboard', label: 'Overview' },
    { to: '/modules/module1', label: 'Modules' },
    { to: '/practical-lab', label: 'Lab' },
    { to: '/projects', label: 'Projects' },
    { to: '/quiz-center', label: 'Quizzes' },
    { to: '/profile', label: 'My Profile' },
    { to: '/teacher', label: 'Teacher Panel' },
  ];
  return (
    <div className="d-none d-md-block bg-white shadow-sm p-3 rounded" style={{ width: '250px' }}>
      <Nav className="flex-column">
        {links.map(link => (
          <Nav.Link as={Link} to={link.to} key={link.to}
            className={location.pathname === link.to ? 'fw-bold text-primary' : 'text-dark'}>
            {link.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};
export default Sidebar;
