import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  border-top: 1px solid ${({ theme }) => theme.text_secondary + '20'};
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1.5rem 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 22px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.5px;
`;

const Tagline = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-top: -8px;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.2s ease-in-out;
  padding: 8px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.text_secondary + '30'};
  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + '15'};
    transform: translateY(-2px);
  }
`;

const ResumeLink = styled.a`
  font-size: 13px;
  color: ${({ theme }) => theme.primary};
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Divider = styled.div`
  width: 80%;
  max-width: 700px;
  height: 1px;
  background: ${({ theme }) => theme.text_secondary + '20'};
  margin: 0.5rem 0;
`;

const Copyright = styled.p`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text_secondary + 'aa'};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Rakesh Vejendla</Logo>
        <Tagline>AI Full Stack Engineer · Building Scalable Web & Mobile Apps</Tagline>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon fontSize="small" />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon fontSize="small" />
          </SocialMediaIcon>
          <SocialMediaIcon href="mailto:rakeshvejendla333@gmail.com" aria-label="Email">
            <EmailIcon fontSize="small" />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <ResumeLink href={Bio.resume} target="_blank" rel="noopener noreferrer" download>
          ⬇ Download Resume
        </ResumeLink>
        <Divider />
        <Copyright>
          &copy; {new Date().getFullYear()} Rakesh Vejendla. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
