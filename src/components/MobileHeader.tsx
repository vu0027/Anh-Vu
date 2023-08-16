import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled(Link)`
	background-color: #E8FFFB;
	height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
	flex-direction: column;
	border-bottom: 2px solid #f2f2f2;
	cursor: pointer;
	text-decoration: none;
	z-index: 2;
`

const MobileHeader: React.FC = () => {

  return (
    <HeaderWrapper to='/'>
      <Typography bold fontSize='18px'>ANH VU</Typography>
			<Typography color="#8a8a8a">Software Engineer</Typography>
    </HeaderWrapper>
  );
};

export default MobileHeader;
