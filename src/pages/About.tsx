import React from 'react';
import Container from '../components/Container';
import JobCard from '../components/JobCard';
import data from '../data/profileData.json';
import MobileHeader from '../components/MobileHeader';
import Typography from '../components/Typography';

const experiences = data.about.experience;

const About: React.FC = () => {
  return (
    <React.Fragment>
      <MobileHeader />
      <Container id='about' backgroundColor='#F8FFF6' verticalLineUp>
      <Typography color='#45826C' underline style={{marginTop: '3%'}}>About</Typography>
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
      </Container>
    </React.Fragment>
  );
};

export default About;
