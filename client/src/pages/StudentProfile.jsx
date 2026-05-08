import { Container, Card, ListGroup } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const StudentProfile = () => {
  const { user } = useAuth();
  return (
    <Container className="py-4">
      <h2>Student Profile</h2>
      <Card className="p-4">
        <h5>{user?.name}</h5>
        <p>Email: {user?.email}</p>
        <h6>Completed Quizzes</h6>
        <ListGroup>
          <ListGroup.Item>Work and Energy - 80%</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};
export default StudentProfile;
