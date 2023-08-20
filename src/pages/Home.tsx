import React from 'react';
import Container from '../components/Container';
import styled from 'styled-components';
import Typography from '../components/Typography';
import Button from '../components/Button';

const BackgroundContainer = styled.div<{background?: string}>`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: url(${process.env.PUBLIC_URL}/profile-photo.png) no-repeat bottom -20px right -300px;
  background-size: 70%;
  opacity: 0.3;
  @media (max-width: 768px) {
    background: url('/images/profile-photo.png') no-repeat bottom -10% right 110%;
    background-size: 180%;
  }
`;

const TextContentWrapper = styled.div`
  padding-left: 50%;
  padding-bottom: 5%;
  @media (max-width: 768px) {
    padding: 0 12% 12%;
  }
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50%;
  @media (max-width: 768px) {
    padding-left: 12%;
  }
`;

const Home: React.FC = () => {

  return (
    <Container id='home'>
      <BackgroundContainer />
      <HomeWrapper>
        <TextContentWrapper>
          <Typography style={{fontSize: '50px', marginBottom: '20px'}}>Hello</Typography>
          <Typography style={{fontSize: '30px'}}>I am Anh Vu,</Typography>
          <Typography style={{fontSize: '18px'}}>A passion <span>Software Engineer</span></Typography>
          <Typography style={{fontSize: '18px'}}>who always enthusiatic about planning and creating my next</Typography>
          <Typography style={{fontSize: '18px'}}>innovation project.</Typography>
        </TextContentWrapper>

        <ButtonWrapper>
          <Button text='See My Project' to='/projects' />
          <Button text='More About Me' to='/about' />
          <Button text='Resume' to='/resume'/>
          <Button text='Blog' to='/blog'/>

        </ButtonWrapper>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
