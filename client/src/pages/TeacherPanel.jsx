import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const TeacherPanel = () => (
  <Container className="py-4">
    <h2>Teacher Control Panel</h2>
    <Row className="mt-4">
      <Col md={6}>
        <Card className="p-3 mb-3">
          <h5>Upload Resource</h5>
          <Form>
            <Form.Group className="mb-2"><Form.Control placeholder="Title" /></Form.Group>
            <Form.Group className="mb-2"><Form.Control type="file" /></Form.Group>
            <Button variant="primary">Upload</Button>
          </Form>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="p-3 mb-3">
          <h5>Create Quiz</h5>
          <Button variant="outline-primary">New Quiz</Button>
        </Card>
      </Col>
    </Row>
  </Container>
);
export default TeacherPanel;
