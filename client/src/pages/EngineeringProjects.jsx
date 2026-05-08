import { projects } from '../data/projects';
import { Container, Row, Col, Badge, ListGroup } from 'react-bootstrap';
import Card from '../components/common/Card';
import { motion } from 'framer-motion';

const EngineeringProjects = () => (
  <Container className="py-5">
    <h2 className="section-title mb-4">Engineering Projects</h2>
    <Row>
      {projects.map(proj => (
        <Col md={4} key={proj.id} className="mb-4">
          <motion.div whileHover={{ y: -5 }}>
            <Card>
              <h5>{proj.title}</h5>
              <p><Badge bg="warning" text="dark">{proj.difficulty}</Badge> <Badge bg="info">{proj.time}</Badge></p>
              <h6>Materials</h6>
              <ListGroup className="mb-3">
                {proj.materials.map(m => <ListGroup.Item key={m}>{m}</ListGroup.Item>)}
              </ListGroup>
              <a href={proj.guideUrl} className="btn btn-sm btn-primary">Download Guide</a>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
);
export default EngineeringProjects;
