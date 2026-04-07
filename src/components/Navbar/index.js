import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

const StyledNavLink = styled.a`
  color: ${({ theme, active }) => active ? theme.primary : theme.text_primary};
  font-weight: ${({ active }) => active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-bottom: 2px solid ${({ theme, active }) => active ? theme.primary : 'transparent'};
  padding-bottom: 2px;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  border: 1.5px solid ${({ theme }) => theme.text_secondary + '30'};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    transform: rotate(20deg);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const sections = ['about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];

const navItems = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#education', label: 'Education', id: 'education' },
  { href: '#certifications', label: 'Certifications', id: 'certifications' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'about';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Rakesh Vejendla</Span>
          </a>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          {navItems.map((item) => (
            <StyledNavLink
              key={item.id}
              href={item.href}
              active={activeSection === item.id ? 1 : 0}
            >
              {item.label}
            </StyledNavLink>
          ))}
        </NavItems>
        <NavRight>
          <ThemeToggle onClick={() => setDarkMode(!darkMode)} title={darkMode ? 'Light Mode' : 'Dark Mode'}>
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </ThemeToggle>
        </NavRight>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {navItems.map((item) => (
              <MobileLink key={item.id} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </MobileLink>
            ))}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
