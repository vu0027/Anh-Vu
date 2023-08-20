import React, { useState } from 'react';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import data from '../data/profileData.json';
import MobileHeader from '../components/MobileHeader';
import Typography from '../components/Typography';
import styled from 'styled-components';
import WhichCountry from './WhichCountry';

const projects = data.projects;

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const About: React.FC = () => {
  const [showQuizPage, setShowQuizPage] = useState(false);

  const navigateToQuizPage = () => {
    const conditionIsMet = true;

    if (conditionIsMet) {
      setShowQuizPage(true);
    }
  };
  return (
    <React.Fragment>
      {!showQuizPage && (
        <React.Fragment>
          <MobileHeader />
          <Container id='about' backgroundColor='#F8FFF6' verticalLineUp>
          <Typography color='#45826C' underline style={{marginTop: '3%'}}>Projects</Typography>
          <ProjectsContainer onClick={navigateToQuizPage}>
            {projects.map((project) => {
              return (
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  link={project.title === 'Project 2' ? undefined : project.link}
                />
              )
            })};
          </ProjectsContainer>
          </Container>
        </React.Fragment>
      )}
      {showQuizPage && <WhichCountry />}

    </React.Fragment>
  );
};

export default About;
