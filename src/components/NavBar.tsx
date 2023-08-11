import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 60px; /* Adjust as needed */
  width: 100%;
`;

const HamburgerButton = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const HamburgerLine = styled.span<{ isOpen: boolean }>`
  width: 30px;
  height: 3px;
  background-color: black;
  transition: transform 0.3s;

  margin-top: ${props => (props.isOpen ? '18px' : '10px')};
  transition: transform 0.3s, margin-top 0.3s;

  &:first-child {
    transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'none')};
    transform-origin: top left;
  }

  &:last-child {
    transform: ${props => (props.isOpen ? 'rotate(-45deg)' : 'none')};
    transform-origin: bottom left;
  }
`;

interface NavBarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <NavbarContainer>
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
      </HamburgerButton>
      {/* ... other navbar content */}
    </NavbarContainer>
  );
};

export default NavBar;
