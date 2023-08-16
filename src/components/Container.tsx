import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section<{ backgroundColor?: string }>`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`;

interface SectionContainerProps {
  backgroundColor?: string;
  id: string;
  children: React.ReactNode;
  verticalLineUp?: boolean;
}

const Container: React.FC<SectionContainerProps> = ({
  backgroundColor,
  id,
  children,
  verticalLineUp,
}) => {
  let containerStyle: React.CSSProperties = {};
  if (verticalLineUp) {
    containerStyle = {
      display: 'flex',
      flexDirection: 'column',
    };
  }
  return <SectionContainer id={id} backgroundColor={backgroundColor} style={containerStyle}>{children}</SectionContainer>;
};

export default Container;
