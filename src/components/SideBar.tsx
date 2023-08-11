import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: 250px;
  background-color: #333;
  height: 100vh;
  position: fixed;
  right: ${props => (props.isOpen ? '0' : '-250px')};
  transition: right 0.3s;
`;

const NavLinkContainer = styled.nav`
  margin-top: 3rem;
  padding: 1rem;
`;

const NavLinkStyled = styled(NavLink)`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 1.2rem;

  &:hover {
    font-weight: bold;
  }
`;

interface SidebarProps {
	isOpen: boolean;
	closeMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeMenu }) => {
	const handleNavLinkClick = () => {
		closeMenu();
	};

	return (
		<SidebarContainer isOpen={isOpen}>
			<NavLinkContainer>
				<NavLinkStyled to="home" onClick={handleNavLinkClick}>
					Home
				</NavLinkStyled>
				<NavLinkStyled to="about" onClick={handleNavLinkClick}>
					About
				</NavLinkStyled>
				<NavLinkStyled to="projects" onClick={handleNavLinkClick}>
					Projects
				</NavLinkStyled>
				<NavLinkStyled to="resume" onClick={handleNavLinkClick}>
					Resume
				</NavLinkStyled>
				<NavLinkStyled to="blog" onClick={handleNavLinkClick}>
					Blog
				</NavLinkStyled>
			</NavLinkContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
