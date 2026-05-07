import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

const DashboardLayout = () => (
  <>
    <Navbar />
    <Container fluid className="mt-4">
      <Row>
        <Col md={3} lg={2} className="mb-4">
          <Sidebar />
        </Col>
        <Col md={9} lg={10}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  </>
);
export default DashboardLayout;
