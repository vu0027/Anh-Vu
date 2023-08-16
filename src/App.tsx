import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PDFViewer from 'pdf-viewer-reactjs';
import styled from '@emotion/styled';
import { useState } from 'react';
import Sidebar from './components/SideBar';
import Blog from './pages/Blog';
import React from 'react';

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);

  };

  return (
    <Router>
      <Sidebar isOpen={menuOpen} closeMenu={closeMenu} />
      <NavBar isOpen={menuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={(
          <React.Fragment>
            <CenteredContent>
              <a href={process.env.PUBLIC_URL + "/pdf/AnhVu_Resume.pdf"} download style={{ zIndex: 2 }}>
                <p>Download Resume</p>
              </a>
            </CenteredContent>

            <PDFViewer
              hideNavbar
              document={{
                url: process.env.PUBLIC_URL + "/pdf/AnhVu_Resume.pdf"
              }}
            />

          </React.Fragment>
        )} />
      </Routes>
    </Router>
  );
}

export default App;
