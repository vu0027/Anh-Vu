import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';

const BackButtonWrapper = styled.div`
  position: fixed;
	height: 20%;
	z-index: 2;
`;

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  cursor: pointer;
	padding-left: 29%;
	padding-top: 32%;
`;

interface BackButtonProps {
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ label = 'Go Back' }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
		<BackButtonWrapper>
      <StyledArrowBackIcon style={{fontSize: '3.1rem'}} onClick={handleGoBack} />
		</BackButtonWrapper>
  );
};

export default BackButton;
