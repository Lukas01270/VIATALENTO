// src/App.tsx

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home'; 
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage';
import RegisterPage from './pages/RegisterPage';
import PaymentPage from './pages/PaymentPage';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/courses" element={<CoursesPage />} />
  <Route path="/course/:courseId" element={<CourseDetailPage />} /> {/* 👈 NUEVA RUTA */}
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/payment/:registrationId" element={<PaymentPage />} />
</Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;