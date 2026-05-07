import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../components/layout/DashboardLayout';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ModuleView from '../pages/ModuleView';
import PracticalLab from '../pages/PracticalLab';
import EngineeringProjects from '../pages/EngineeringProjects';
import QuizCenter from '../pages/QuizCenter';
import TeacherPanel from '../pages/TeacherPanel';
import StudentProfile from '../pages/StudentProfile';
import ResourceCenter from '../pages/ResourceCenter';
import ContactSupport from '../pages/ContactSupport';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from '../components/common/ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/modules/:slug" element={<ModuleView />} />
      <Route path="/practical-lab" element={<PracticalLab />} />
      <Route path="/projects" element={<EngineeringProjects />} />
      <Route path="/quiz-center" element={<QuizCenter />} />
      <Route path="/resources" element={<ResourceCenter />} />
      <Route path="/contact" element={<ContactSupport />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/teacher" element={<ProtectedRoute><TeacherPanel /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><StudentProfile /></ProtectedRoute>} />
      </Route>
    </Route>
  </Routes>
);
export default AppRoutes;
