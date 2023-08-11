import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section<{ backgroundColor?: string }>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor || '#f0f0f0'};
`;

interface SectionContainerProps {
  backgroundColor?: string;
  id: string;
  children: React.ReactNode;
}

const Container: React.FC<SectionContainerProps> = ({
  backgroundColor,
  id,
  children,
}) => {
  return <SectionContainer id={id} backgroundColor={backgroundColor}>{children}</SectionContainer>;
};

export default Container;
