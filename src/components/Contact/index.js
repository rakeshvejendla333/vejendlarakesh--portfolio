import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaExternalLinkAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Bio } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 20px 140px;
  @media (max-width: 960px) {
    padding: 40px 16px 120px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  max-width: 420px;
  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

const ContactRow = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary + '20'};
  transition: all 0.22s ease;
  background: ${({ theme }) => theme.card};
  &:hover {
    background: ${({ theme }) => theme.primary + '12'};
    border-color: ${({ theme }) => theme.primary + '60'};
    transform: translateX(4px);
  }
`;

const IconWrap = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(225deg, hsla(271,100%,50%,0.15) 0%, hsla(294,100%,50%,0.15) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  flex-shrink: 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const ContactLabel = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ContactValue = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;

const ExternalIcon = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.text_secondary + '60'};
  font-size: 0.7rem;
`;

const FormCard = styled.form`
  background: ${({ theme }) => theme.card};
  border-radius: 18px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 0.5px solid #854CE640;
  box-shadow: rgba(23, 92, 230, 0.08) 0px 4px 24px;
`;

const FormTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  border: 1.5px solid ${({ theme }) => theme.text_secondary + '25'};
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  font-family: inherit;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + '80'};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  border: 1.5px solid ${({ theme }) => theme.text_secondary + '25'};
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 110px;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  font-family: inherit;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + '80'};
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  background: linear-gradient(225deg, hsla(271,100%,50%,1) 0%, hsla(294,100%,50%,1) 100%);
  color: white;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.7 : 1};
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(133,76,230,0.3);
  font-family: inherit;
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(133,76,230,0.45);
  }
`;

const StatusMsg = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${({ success }) => success ? '#22c55e' : '#ff4d4d'};
  font-weight: 600;
  background: ${({ success, theme }) => success ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 77, 77, 0.1)'};
  padding: 12px;
  border-radius: 10px;
  margin-top: 4px;
  z-index: 100;
  position: relative;
`;

const ResumeButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 14px 0;
  border-radius: 14px;
  background: linear-gradient(225deg, hsla(271,100%,50%,1) 0%, hsla(294,100%,50%,1) 100%);
  color: white;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  margin-top: 4px;
  transition: all 0.25s ease;
  box-shadow: 0 4px 16px rgba(133,76,230,0.3);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(133,76,230,0.45);
  }
`;

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs.sendForm(
      'service_52mssd1',   
      'template_fvk2m7e',  
      form.current,
      'mHyb3ceFuuUH1qZ_m'      
    ).then((result) => {
      console.log('SUCCESS!', result.text);
      setStatus('success');
      form.current.reset();
    }).catch((error) => {
      console.error('FAILED...', error);
      setStatus('error');
    }).finally(() => {
      setSending(false);
    });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Left>
          <Title>Let's Connect</Title>
          <Desc>
            Open to full-time roles, freelance projects, and collaborations. Reach out directly or send me a message!
          </Desc>

          <ContactRow href="mailto:rakeshvejendla333@gmail.com">
            <IconWrap><FaEnvelope /></IconWrap>
            <ContactInfo>
              <ContactLabel>Email</ContactLabel>
              <ContactValue>rakeshvejendla333@gmail.com</ContactValue>
            </ContactInfo>
            <ExternalIcon><FaExternalLinkAlt /></ExternalIcon>
          </ContactRow>

          <ContactRow href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <IconWrap><FaLinkedin /></IconWrap>
            <ContactInfo>
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactValue>linkedin.com/in/vejendlarakesh</ContactValue>
            </ContactInfo>
            <ExternalIcon><FaExternalLinkAlt /></ExternalIcon>
          </ContactRow>

          <ContactRow href={Bio.github} target="_blank" rel="noopener noreferrer">
            <IconWrap><FaGithub /></IconWrap>
            <ContactInfo>
              <ContactLabel>GitHub</ContactLabel>
              <ContactValue>github.com/rakeshvejendla333</ContactValue>
            </ContactInfo>
            <ExternalIcon><FaExternalLinkAlt /></ExternalIcon>
          </ContactRow>

          <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
            <FaFileDownload size={16} /> View / Download Resume
          </ResumeButton>
        </Left>

        <Right>
          <FormCard ref={form} onSubmit={handleSubmit}>
            <FormTitle>Send a Message ✉️</FormTitle>
            <Input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject (e.g. Job Opportunity)"
            />
            <TextArea
              name="message"
              placeholder="Your message..."
              required
            />
            <SendButton type="submit" disabled={sending}>
              <FaPaperPlane size={14} />
              {sending ? 'Sending...' : 'Send Message'}
            </SendButton>
            {status === 'success' && (
              <StatusMsg success>✓ Message sent successfully!</StatusMsg>
            )}
            {status === 'error' && (
              <StatusMsg>✗ Something went wrong. Email me directly.</StatusMsg>
            )}
          </FormCard>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;
