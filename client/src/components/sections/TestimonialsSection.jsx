import { Container, Row, Col } from 'react-bootstrap';
import Card from '../common/Card';
import { motion } from 'framer-motion';

const TestimonialsSection = () => (
  <section className="py-5 bg-soft-gray">
    <Container>
      <h2 className="section-title text-center mb-5">What Students Say</h2>
      <Row>
        {[1,2,3].map(i => (
          <Col md={4} key={i} className="mb-4">
            <motion.div whileHover={{ y: -5 }}>
              <Card>
                <p className="fst-italic">"The interactive modules made physics so much easier to understand. The simulations are amazing!"</p>
                <p className="fw-bold mb-0">- Student {i}</p>
                <small className="text-muted">Senior 5</small>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
export default TestimonialsSection;
