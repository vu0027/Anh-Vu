import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  background-color: #E8FFFB;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #f2f2f2;
  text-decoration: none;
`;

const TypographyLink = styled(Link)`
  z-index: 4;
`;

const MobileHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <TypographyLink to='/'>
        <Typography style={{cursor: 'pointer'}} bold fontSize='18px'>ANH VU</Typography>
      </TypographyLink>
      <TypographyLink to='/'>
        <Typography style={{cursor: 'pointer'}} color='#8a8a8a'>Software Engineer</Typography>
      </TypographyLink>
    </HeaderWrapper>
  );
};

export default MobileHeader;
