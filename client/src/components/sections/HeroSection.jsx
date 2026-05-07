import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => (
  <section className="vh-100 d-flex align-items-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #1E3A8A 100%)' }}>
    <div className="position-absolute w-100 h-100" style={{ background: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e) center/cover', opacity: '0.15' }}></div>
    <Container className="position-relative text-center text-white">
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="display-4 fw-bold mb-4">Advanced Secondary Physics</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="lead mb-4">Interactive modules, hands-on labs, engineering projects, and live quizzes.</motion.p>
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}>
        <Button as={Link} to="/register" variant="light" size="lg" className="me-3 px-4">Get Started</Button>
        <Button as={Link} to="/modules/module1" variant="outline-light" size="lg" className="px-4">Explore Modules</Button>
      </motion.div>
    </Container>
  </section>
);
export default HeroSection;
