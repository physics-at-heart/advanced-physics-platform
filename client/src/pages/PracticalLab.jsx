import { practicals } from '../data/practicals';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Card from '../components/common/Card';
import { motion } from 'framer-motion';

const PracticalLab = () => (
  <Container className="py-5">
    <h2 className="section-title mb-4">Practical Laboratory</h2>
    <Row>
      {practicals.map(exp => (
        <Col md={4} key={exp.id} className="mb-4">
          <motion.div whileHover={{ scale: 1.03 }}>
            <Card>
              <h5>{exp.title}</h5>
              <p>{exp.description}</p>
              <Badge bg="primary">{exp.difficulty}</Badge> <Badge bg="secondary">{exp.duration}</Badge>
              <div className="mt-3">
                <button className="btn btn-sm btn-outline-primary">View Guide</button>
              </div>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
);
export default PracticalLab;
