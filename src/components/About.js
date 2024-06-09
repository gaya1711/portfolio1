import React from 'react';
import styled, { keyframes } from 'styled-components';
import profilePic from '../images/me3.jpeg'; 

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: left;
  padding: 50px 20px;
  background-color: #181818;
  height: 67vh;
  animation: ${fadeIn} 1s ease-in-out;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-right: 50px;
  object-fit: cover; /* Ensures the image covers the entire container */
  object-position: center bottom;

  @media (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;

const AboutContent = styled.div`
  max-width: 60%;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  color: #019b65; /* Green theme color */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const AboutText = styled.p`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: #019b65; /* Green theme color */
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <ProfileImage src={profilePic} alt="Profile" />
      <AboutContent>
        <AboutTitle>Web Developer and Designer</AboutTitle>
        <AboutText>Hi there! I'm Gayathri</AboutText>
        <AboutText>I love to design, code and create.</AboutText>
        <DownloadButton href="/GayathriReddy_Resume (1).pdf" download>Download CV</DownloadButton>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
