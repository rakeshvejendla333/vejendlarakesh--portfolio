import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaFileDownload, FaEnvelope } from 'react-icons/fa';
import HeroBgAnimation from '../HeroBgAnimation';
import {
  HeroContainer, HeroBg, HeroLeftContainer, Img,
  HeroRightContainer, HeroInnerContainer, TextLoop, Title,
  Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const AvailableBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.35);
  color: #22c55e;
  font-size: 13px;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 16px;
  width: fit-content;
  letter-spacing: 0.2px;
`;

const GreenDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  display: inline-block;
  animation: ${pulse} 2s infinite;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 18px;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 640px) {
    gap: 16px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 960px) {
    align-items: center;
  }
`;

const StatNumber = styled.span`
  font-size: 22px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  margin-top: 2px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 36px;
  background: ${({ theme }) => theme.text_secondary + '30'};
  align-self: center;
  @media (max-width: 480px) {
    display: none;
  }
`;

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <AvailableBadge>
                            <GreenDot /> Open to New Opportunities
                        </AvailableBadge>
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <StatsRow>
                          <StatItem>
                            <StatNumber>3+</StatNumber>
                            <StatLabel>Years Experience</StatLabel>
                          </StatItem>
                          <StatDivider />
                          <StatItem>
                            <StatNumber>5</StatNumber>
                            <StatLabel>Companies</StatLabel>
                          </StatItem>
                          <StatDivider />
                          <StatItem>
                            <StatNumber>10+</StatNumber>
                            <StatLabel>Projects</StatLabel>
                          </StatItem>
                          <StatDivider />
                          <StatItem>
                            <StatNumber>AWS</StatNumber>
                            <StatLabel>Certified</StatLabel>
                          </StatItem>
                        </StatsRow>
                        <SocialMediaIcons>
                            <SocialMediaIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <FaLinkedin />
                            </SocialMediaIcon>
                            <SocialMediaIcon href={Bio.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                                <FaGithub />
                            </SocialMediaIcon>
                            <SocialMediaIcon href="mailto:rakeshvejendla333@gmail.com" title="Email">
                                <FaEnvelope />
                            </SocialMediaIcon>
                        </SocialMediaIcons>
                        <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
                            <FaFileDownload style={{ marginRight: '8px' }} /> Download Resume
                        </ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="Rakesh Vejendla - AI Full Stack Engineer" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
