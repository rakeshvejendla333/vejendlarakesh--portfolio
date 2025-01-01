import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ReadMoreButton } from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    const [showFullBio, setShowFullBio] = useState(false);

    const handleReadMore = () => {
        setShowFullBio(!showFullBio);
    };

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
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
                        <SubTitle>
                            {Bio.description.substring(0, 150)}{!showFullBio && '...'}
                            {showFullBio && (
                                <span>{Bio.description.substring(150)}</span>
                            )}
                        </SubTitle>
                        <ReadMoreButton onClick={handleReadMore}>
                            {showFullBio ? "Read Less" : "Read More"}
                        </ReadMoreButton>
                        <SocialMediaIcons>
                            <SocialMediaIcon href="https://www.linkedin.com/in/vejendlarakesh/" target="_blank">
                                <FaLinkedin />
                            </SocialMediaIcon>
                        </SocialMediaIcons>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
