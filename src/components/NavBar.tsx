import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  height: 60px; /* Adjust as needed */
  width: 100%;
  z-index: 2;
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
  margin-bottom: 34px;
`;

const HamburgerLine = styled.span<{ isOpen: boolean }>`
  width: 30px;
  height: 3px;
  background-color: ${props => (props.isOpen ? 'white' : 'black')};
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
  const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node))
        toggleMenu();
    };
    if (isOpen)
      window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, toggleMenu]);

  const handleHamburgerClick = (event: React.MouseEvent) => {
    event.preventDefault();
    toggleMenu();
  };

  return (
    <NavbarContainer to='/'>
      <HamburgerButton isOpen={isOpen} onClick={handleHamburgerClick} ref={sidebarRef as any}>
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
      </HamburgerButton>
    </NavbarContainer>
  );
};

export default NavBar;
