import { useState } from 'react';
import { quizData } from '../data/quizzes';
import { Container, Row, Col, Button, ProgressBar, Card, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const QuizCenter = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);

  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
  };

  const handleAnswer = (idx) => {
    if (idx === currentQuiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < currentQuiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <Container className="py-5 text-center">
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score} / {currentQuiz.questions.length}</p>
        <Button onClick={() => setCurrentQuiz(null)}>Back to Quizzes</Button>
      </Container>
    );
  }

  if (currentQuiz) {
    const q = currentQuiz.questions[currentQuestion];
    return (
      <Container className="py-5">
        <h3>{currentQuiz.topic}</h3>
        <ProgressBar now={(currentQuestion / currentQuiz.questions.length) * 100} label={`${currentQuestion+1}/${currentQuiz.questions.length}`} className="mb-4" />
        <Card className="p-4">
          <h5>{q.question}</h5>
          <Form>
            {q.options.map((opt, idx) => (
              <Form.Check
                key={idx}
                type="radio"
                name="answer"
                label={opt}
                onChange={() => setSelected(idx)}
                checked={selected === idx}
              />
            ))}
          </Form>
          <Button className="mt-3" disabled={selected === null} onClick={() => handleAnswer(selected)}>Next</Button>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="section-title mb-4">Quiz Center</h2>
      <Row>
        {quizData.map(quiz => (
          <Col md={4} key={quiz.id} className="mb-4">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card>
                <h5>{quiz.topic}</h5>
                <p>{quiz.questions.length} questions</p>
                <Button onClick={() => startQuiz(quiz)}>Start Quiz</Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default QuizCenter;
