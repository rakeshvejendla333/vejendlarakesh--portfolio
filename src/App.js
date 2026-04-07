import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import Certifications from "./components/Certifications";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { FaArrowUp } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  * { scroll-behavior: smooth; box-sizing: border-box; }
  body { font-family: 'Inter', sans-serif; }
  .fade-in-section {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(225deg, hsla(271,100%,50%,1) 0%, hsla(294,100%,50%,1) 100%);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 18px rgba(133, 76, 230, 0.45);
  z-index: 999;
  animation: ${fadeIn} 0.3s ease;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(133, 76, 230, 0.6);
  }
  @media (max-width: 600px) {
    bottom: 20px;
    right: 20px;
  }
`;

function useFadeInOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.08 }
    );
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [showTop, setShowTop] = useState(false);

  useFadeInOnScroll();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          <HeroSection />
          <Wrapper>
            <div className="fade-in-section"><Skills /></div>
            <div className="fade-in-section"><Experience /></div>
            <div className="fade-in-section"><Projects openModal={openModal} setOpenModal={setOpenModal} /></div>
            <div className="fade-in-section"><Education /></div>
            <div className="fade-in-section"><Certifications /></div>
            <div className="fade-in-section"><Contact /></div>
          </Wrapper>
          <Footer />
          {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
          {showTop && (
            <BackToTop onClick={scrollToTop} aria-label="Back to top">
              <FaArrowUp size={16} />
            </BackToTop>
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
