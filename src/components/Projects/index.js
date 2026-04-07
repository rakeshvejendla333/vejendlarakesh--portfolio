import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import { projects } from '../../data/constants'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = styled.div`
  width: 330px;
  background: ${({ theme }) => theme.card};
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 0.5px solid #854CE640;
  transition: all 0.35s cubic-bezier(.25,.8,.25,1);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(133, 76, 230, 0.25);
    border-color: #854CE6;
  }
  @media (max-width: 600px) {
    width: 90vw;
    max-width: 360px;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-bottom: 1px solid #854CE620;
`

const ProjectBody = styled.div`
  padding: 18px 20px 14px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`

const ProjectTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
`

const ProjectDate = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + 'aa'};
  margin-top: -4px;
`

const ProjectDesc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + '18'};
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.primary + '35'};
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px 20px 16px;
  border-top: 1px solid ${({ theme }) => theme.text_secondary + '15'};
  margin-top: auto;
`

const LinkBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  background: linear-gradient(225deg, hsla(271,100%,50%,1) 0%, hsla(294,100%,50%,1) 100%);
  box-shadow: 0 2px 10px rgba(133,76,230,0.3);
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 4px 16px rgba(133,76,230,0.5);
  }
`

const FINDSTREAK_ID = 0

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all')

  const filtered = toggle === 'all'
    ? projects
    : projects.filter(p => p.category === toggle)

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Real-world projects across AI, full-stack web, mobile, and systems engineering.
        </Desc>
        <ToggleButtonGroup>
          {['all', 'web app', 'mobile app', 'AI', 'machine learning'].map((cat, i, arr) => (
            <React.Fragment key={cat}>
              <ToggleButton
                active={toggle === cat}
                onClick={() => setToggle(cat)}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </ToggleButton>
              {i !== arr.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {filtered.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage src={project.image} alt={project.title} loading="lazy" />
              <ProjectBody>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDate>{project.date}</ProjectDate>
                <ProjectDesc>{project.description}</ProjectDesc>
                <Tags>
                  {project.tags?.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </Tags>
              </ProjectBody>
              {/* Only FindStreak shows links */}
              {project.id === FINDSTREAK_ID && (
                <ProjectLinks>
                  <LinkBtn href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={13} /> GitHub
                  </LinkBtn>
                  <LinkBtn href={project.webapp} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </LinkBtn>
                </ProjectLinks>
              )}
            </ProjectCard>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects