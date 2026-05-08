import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import useAuth from '../hooks/useAuth';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const Dashboard = () => {
  const { user } = useAuth();
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{ label: 'Progress', data: [10, 25, 45, 60], borderColor: '#1E3A8A' }],
  };

  return (
    <Container className="py-4">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Welcome back, {user?.name}!</motion.h2>
      <Row className="mt-4">
        <Col md={8}>
          <Card className="p-3 mb-3">
            <h5>Learning Progress</h5>
            <Line data={chartData} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 mb-3">
            <h5>Module 1 Progress</h5>
            <ProgressBar now={60} label="60%" />
          </Card>
          <Card className="p-3">
            <h5>Upcoming Quizzes</h5>
            <p>Work and Energy - Tomorrow</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
