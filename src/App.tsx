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


const PageWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
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
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resume" element={<PDFViewer
          document={{
            url: process.env.PUBLIC_URL + "/pdf/AnhVu_Resume.pdf"
          }}
        />} />
    </Routes>
    </Router>
  );
}

export default App;
