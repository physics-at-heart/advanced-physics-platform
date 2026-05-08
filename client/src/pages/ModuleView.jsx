import { useParams } from 'react-router-dom';
import { modules } from '../data/modules';
import { Container, Row, Col, ListGroup, Accordion, ProgressBar } from 'react-bootstrap';
import Card from '../components/common/Card';
import { motion } from 'framer-motion';

const ModuleView = () => {
  const { slug } = useParams();
  const mod = modules.find(m => m.id === slug);
  if (!mod) return <div className="text-center mt-5">Module not found</div>;

  return (
    <Container className="py-5">
      <motion.h2 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="mb-4">{mod.title}</motion.h2>
      <Row>
        <Col md={8}>
          <Card>
            <img src={mod.image} alt={mod.title} className="img-fluid rounded mb-3" />
            <h4>Topics Covered</h4>
            <ListGroup className="mb-4">
              {mod.topics.map(t => <ListGroup.Item key={t}>{t}</ListGroup.Item>)}
            </ListGroup>
            <h5>Progress</h5>
            <ProgressBar now={0} label="0%" className="mb-3" />
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Lesson 1: Introduction</Accordion.Header>
                <Accordion.Body>Interactive content placeholder. Diagrams, videos, and text will be here.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="sticky-top" style={{ top: '80px' }}>
            <h5>Quick Links</h5>
            <ListGroup variant="flush">
              <ListGroup.Item action href="/practical-lab">Related Experiments</ListGroup.Item>
              <ListGroup.Item action href="/projects">Engineering Projects</ListGroup.Item>
              <ListGroup.Item action href="/quiz-center">Take Quiz</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ModuleView;
