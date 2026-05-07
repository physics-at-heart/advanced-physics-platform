import { Container, Row, Col } from 'react-bootstrap';
import AnimatedCounter from '../common/AnimatedCounter';
import { motion } from 'framer-motion';

const stats = [
  { end: 3, label: 'Detailed Modules' },
  { end: 25, label: 'Interactive Lessons' },
  { end: 15, label: 'Lab Experiments' },
  { end: 9, label: 'Engineering Projects' },
];

const StatsSection = () => (
  <section className="py-5 bg-white">
    <Container>
      <Row className="text-center g-4">
        {stats.map((stat, idx) => (
          <Col md={3} sm={6} key={idx}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="fw-bold" style={{ color: 'var(--primary-royal-blue)' }}><AnimatedCounter end={stat.end} suffix="+" /></h3>
              <p className="text-muted">{stat.label}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
export default StatsSection;
