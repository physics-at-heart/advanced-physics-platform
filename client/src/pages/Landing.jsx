import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import { modules } from '../data/modules';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/common/Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => (
  <>
    <HeroSection />
    <section className="py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Our Physics Modules</h2>
        <Row>
          {modules.map(mod => (
            <Col md={4} key={mod.id} className="mb-4">
              <motion.div whileHover={{ y: -8 }}>
                <Card>
                  <img src={mod.image} alt={mod.title} className="img-fluid rounded mb-3" />
                  <h4>{mod.title}</h4>
                  <ul>
                    {mod.topics.slice(0,3).map(t => <li key={t}>{t}</li>)}
                  </ul>
                  <Link to={`/modules/${mod.id}`} className="btn btn-primary-custom w-100">Learn More</Link>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    <StatsSection />
    <TestimonialsSection />
    <CTASection />
  </>
);

export default Landing;
