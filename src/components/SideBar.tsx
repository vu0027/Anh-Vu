import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Typography from './Typography';

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  background-color: #74cdcc;
  height: 100vh;
  position: fixed;
	width: 12rem;
  right: ${props => (props.isOpen ? '0' : '-20rem')};
  transition: right 0.3s;
	box-shadow: 0px 0px 20px;
	z-index: 1;
`;

const NavLinkContainer = styled.nav`
  margin-top: 5rem;
  padding: 2rem;
	z-index: 1;
`;

const NavLinkStyled = styled(NavLink)`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 25%;
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
				<NavLinkStyled to="" onClick={handleNavLinkClick}>
					<Typography>Home</Typography>
				</NavLinkStyled>
				<NavLinkStyled to="about" onClick={handleNavLinkClick}>
					<Typography>About</Typography>
				</NavLinkStyled>
				<NavLinkStyled to="projects" onClick={handleNavLinkClick}>
					<Typography>Projects</Typography>
				</NavLinkStyled>
				<NavLinkStyled to="resume" onClick={handleNavLinkClick}>
					<Typography>Resume</Typography>
				</NavLinkStyled>
				<NavLinkStyled to="blog" onClick={handleNavLinkClick}>
					<Typography>Blog</Typography>
				</NavLinkStyled>
			</NavLinkContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
