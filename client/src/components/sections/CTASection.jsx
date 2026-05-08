import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => (
  <section className="py-5 text-white text-center" style={{ background: 'linear-gradient(45deg, #00B4D8, #1E3A8A)' }}>
    <Container>
      <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="fw-bold mb-3">Ready to Master Physics?</motion.h3>
      <p className="mb-4">Join now and start your journey with structured lessons, projects, and quizzes.</p>
      <Button as={Link} to="/register" variant="light" size="lg" className="px-5">Sign Up Free</Button>
    </Container>
  </section>
);
export default CTASection;
