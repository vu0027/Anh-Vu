import React from 'react';
import styled from 'styled-components';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Projects';

const ContentContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content: React.FC<{ path: string }> = ({ path }) => {
  let content;

  switch (path) {
    case '/':
      content = <Home />;
      break;
    case '/about':
      content = <About />;
      break;
    case '/projects':
      content = <Project />;
      break;
    default:
      content = null;
  }

  return <ContentContainer>{content}</ContentContainer>;
};

export default Content;