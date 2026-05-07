import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = () => (
  <>
    <Navbar />
    <main style={{ minHeight: '80vh' }}>
      <Outlet />
    </main>
    <Footer />
  </>
);
export default MainLayout;
