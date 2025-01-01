import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <MobileLink href='#contact' onClick={() => setIsOpen(!isOpen)}>Contact</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
