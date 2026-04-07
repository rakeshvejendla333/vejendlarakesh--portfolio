import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { certifications } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 20px 60px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  margin-bottom: 12px;
`;

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-top: 16px;
`;

const CertCard = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${({ theme }) => theme.card};
  border: 1px solid #854CE640;
  border-radius: 16px;
  padding: 22px 28px;
  text-decoration: none;
  min-width: 320px;
  max-width: 420px;
  transition: all 0.28s ease;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  &:hover {
    transform: translateY(-6px);
    border-color: #854CE6;
    box-shadow: 0 10px 32px rgba(133, 76, 230, 0.22);
  }
  @media (max-width: 500px) {
    min-width: 90vw;
    padding: 18px 20px;
  }
`;

const IconBox = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: linear-gradient(135deg, #854CE610, #854CE630);
  border: 1px solid #854CE640;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CertImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const CertInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`;

const CertName = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
`;

const CertIssuer = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

const CertDate = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary + 'bb'};
  margin-top: 2px;
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

const VerifiedBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 2px 8px;
  border-radius: 20px;
`;

const LinkIcon = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.text_secondary + '80'};
  font-size: 0.75rem;
  flex-shrink: 0;
`;

const Certifications = () => {
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>Industry-recognized credentials validating my expertise in cloud and software development.</Desc>
        <CardsRow>
          {certifications.map((cert) => (
            <CertCard key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer">
              <IconBox>
                <CertImg src={cert.image} alt={cert.issuer} />
              </IconBox>
              <CertInfo>
                <CertName>{cert.title}</CertName>
                <CertIssuer>{cert.issuer}</CertIssuer>
                <BadgeRow>
                  <VerifiedBadge>✓ Verified</VerifiedBadge>
                  <CertDate>{cert.date}</CertDate>
                </BadgeRow>
              </CertInfo>
              <LinkIcon><FaExternalLinkAlt /></LinkIcon>
            </CertCard>
          ))}
        </CardsRow>
      </Wrapper>
    </Container>
  );
};

export default Certifications;
