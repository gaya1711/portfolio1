//Contact.js
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const ContactContainer = styled.section`
  background-color: #181818;
  padding: 50px 20px;
  text-align: center;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const IconContainer = styled.div`
  margin: 20px 0; /* Add space between icons */

  a {
    margin: 0 15px; /* Adjusted margin between icons */
    color: #019b65; /* Green theme color */
    font-size: 36px;
    text-decoration: none;
    &:hover {
      color: #FFD0D0;
    }

    @media (max-width: 768px) {
      margin: 0 10px; /* Adjusted margin between icons for smaller screens */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px 0; /* Adjusted margin for smaller screens */
  }
`;



const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2 style={{ fontFamily: 'Poppins', fontSize: '36px', color: 'white' }}>Contact Me</h2>
      <IconContainer>
        <a href="https://www.linkedin.com/in/gayathri-reddy-766880201/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://github.com/gaya1711" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </IconContainer>
      <p style={{ color: 'white', fontSize: '20px' }}>Email: 200020023@iitdh.ac.in</p>
      <p style={{ color: 'white', fontSize: '20px' }}>Contact No: 6281663958</p>
    </ContactContainer>
  );
};

export default Contact;
