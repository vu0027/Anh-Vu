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
import BackButton from './components/BackButton';

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
`;

const ContentOverlay = styled.div<{ menuOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: ${props => (props.menuOpen ? 'blur(3px)' : 'none')};
  background-color: rgb(85 128 132 / 12%);
  opacity: ${props => (props.menuOpen ? 1 : 0)};
  pointer-events: ${props => (props.menuOpen ? 'auto' : 'none')};
  transition: opacity 0.3s;
  z-index: 1;
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
    <Router basename={'/'}>
      <Sidebar isOpen={menuOpen} closeMenu={closeMenu} />
      <NavBar isOpen={menuOpen} toggleMenu={toggleMenu} />
      <ContentOverlay menuOpen={menuOpen} />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path='/about' element={
          <React.Fragment>
            <BackButton />
            <About />
          </React.Fragment>
        } />
        <Route path='/projects' element={
          <React.Fragment>
            <BackButton />
            <Projects />
          </React.Fragment>
        } />
        <Route path='/blog' element={
          <React.Fragment>
            <BackButton />
            <Blog />
          </React.Fragment>
        } />
        <Route path='/resume' element={(
          <React.Fragment>
            <BackButton />
            <CenteredContent>
              <a href={process.env.PUBLIC_URL + '/pdf/AnhVu_Resume.pdf'} download style={{ zIndex: 2 }}>
                <p>Download Resume</p>
              </a>
            </CenteredContent>
            <PDFViewer
              hideNavbar
              document={{
                url: process.env.PUBLIC_URL + '/pdf/AnhVu_Resume.pdf'
              }}
            />
          </React.Fragment>
        )} />
      </Routes>
    </Router>
  );
}

export default App;
