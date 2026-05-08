import { Container, Form, Button, Card } from 'react-bootstrap';

const ContactSupport = () => (
  <Container className="py-5" style={{ maxWidth: '600px' }}>
    <h2 className="section-title mb-4">Contact & Support</h2>
    <Card className="p-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
      <hr />
      <h5>FAQ</h5>
      <p><strong>Q:</strong> How do I access quizzes? <br/><strong>A:</strong> Go to Quiz Center and select a module.</p>
    </Card>
  </Container>
);
export default ContactSupport;
