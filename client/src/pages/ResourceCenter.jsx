import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const resources = [
  { title: 'Physics Formula Sheet', type: 'PDF' },
  { title: 'Energy Notes', type: 'PDF' },
  { title: 'Thermal Physics Guide', type: 'PDF' },
];

const ResourceCenter = () => (
  <Container className="py-5">
    <h2 className="section-title mb-4">Resource Center</h2>
    <Row>
      {resources.map((res, idx) => (
        <Col md={4} key={idx} className="mb-4">
          <motion.div whileHover={{ y: -5 }}>
            <Card>
              <h5>{res.title}</h5>
              <p>{res.type}</p>
              <Button variant="outline-primary" size="sm">Download</Button>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
);
export default ResourceCenter;
