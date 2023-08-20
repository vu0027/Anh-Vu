import React from 'react';
import Container from '../components/Container';
import JobCard from '../components/JobCard';
import data from '../data/profileData.json';
import MobileHeader from '../components/MobileHeader';
import Typography from '../components/Typography';
import styled from 'styled-components';

const experiences = data.about.experience;

const JobCardsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const About: React.FC = () => {
  return (
    <React.Fragment>
      <MobileHeader />
      <Container id='about' backgroundColor='#F8FFF6' verticalLineUp>
      <Typography color='#45826C' underline style={{marginTop: '3%'}}>About</Typography>
      <JobCardsContainer>
        {experiences.map((experience) => {
          return (
            <JobCard
              companyLogo={experience.companyLogo}
              companyName={experience.companyName}
              jobTitle={experience.jobTitle}
              jobDetails={experience.jobDetails}
              startDate={experience.startDate}
              endDate={experience.endDate}
            />
          )
        })};
      </JobCardsContainer>
      </Container>
    </React.Fragment>
  );
};

export default About;
