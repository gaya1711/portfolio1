import React from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

// Import images
import topicModellingImage from '../images/topicmodelling.jpeg';
import subtitleGeneratorImage from '../images/subtitle.jpeg';
import dashboardImage from '../images/dash.jpeg';
import simonGameImage from '../images/simongame.jpeg';
import drumKitImage from '../images/drumkit.jpeg';
import todoListImage from '../images/todo.jpeg';
import weatherlyImage from '../images/wheather.jpeg';
import signUpImage from '../images/signingup.jpeg';
import diceDualImage from '../images/dicedual.jpeg';
import purrfectMatchImage from '../images/purrfect.jpeg';

const ProjectsContainer = styled.section`
  background-color: #181818;
  padding: 0 20px 0 20px; /* Adjusted padding */
  height: calc(100vh - 80px);
  overflow-x: hidden;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 50px;
  }
`;

const ProjectsHeader = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  color: white;
  position: absolute;
  top: 15px;
  left: 20px;
  margin: 0; /* Remove default margin */

  @media (max-width: 768px) {
    font-size: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding-top: 120px; /* Increased padding to ensure header is visible */
  padding-bottom: 10px; /* Decreased bottom padding */
  width: 100%;
  margin: 0 5px;
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar */
  }

  @media (max-width: 768px) {
    margin: 0 10px;
    padding-top: 80px;
  }
`;

const ProjectCard = styled.a`
  background: #202020;
  margin: 0 10px;
  padding: 0;
  min-width: 350px;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, height 0.3s ease;
  overflow: hidden;
  height: 350px;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(1.05); /* Scale the card to expand */
    height: 450px; /* Increased height while expanding */
  }

  @media (max-width: 768px) {
    min-width: 280px;
    max-width: 280px;
    margin: 0 10px;
    height: auto;

    &:hover {
      height: auto;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 70%; /* Adjusted to fit description below */
  border-radius: 15px 15px 0 0;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 60%;
  }
`;

const ProjectTitle = styled.div`
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 5px;
  }
`;

const ProjectDescription = styled.div`
  display: none; /* Initially hidden */
  font-family: 'Poppins', sans-serif;
  font-size: 14px; /* Reduced font size */
  color: white;
  padding: 10px;

  ${ProjectCard}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ScrollIndicator = styled(FaChevronRight)`
  display: none; /* Initially hidden */
  position: fixed;
  right: 20px;
  top: 50%;
  font-size: 36px;
  color: white;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
    top: 90%;
    right: 50%;
    transform: translateX(50%);
  }
`;

const TopRightArrow = styled(FaChevronRight)`
  position: absolute;
  right: 20px;
  top: 22px; /* Align with ProjectsHeader top value */
  font-size: 36px;
  color: white;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const projects = [
  { title: 'Topic Modelling using LDA', description: "Used Latent Dirichlet Allocation (LDA) to uncover hidden topics in complaint datasets. Technologies: Spacy, NLTK, RE, Sklearn, Pandas.", image: topicModellingImage, link: 'https://colab.research.google.com/drive/19Y9EA4a3N9ajezID8Clo7qXAdOJvPWo2?usp=sharing' },
  { title: 'Movie-Subtitle Generator', description: "Created a tool for generating subtitles from videos, including audio extraction and speech-to-text conversion. Utilized robust Subtitles API.", image: subtitleGeneratorImage, link: 'https://github.com/Samyc2002/Anime-Subtitle-Generator' },
  { title: 'Dashboard', description: 'An open library dashboard built using react and various APIs (click on the login button to view the dashboard).', image: dashboardImage, link: 'https://dashboard1209.netlify.app' },
  { title: 'Simon Game', description: 'A popular online game built using HTML, CSS, and JavaScript.', image: simonGameImage, link: 'https://gaya1711.github.io/Simon-game-2/' },
  { title: 'Drum Kit', description: 'A music website where you can play various instrument sounds.', image: drumKitImage, link: 'https://gaya1711.github.io/drum-kit/' },
  { title: 'To-Do List', description: 'A fully functioning to-do list app, using MongoDB for the backend.', image: todoListImage, link: 'https://github.com/gaya1711/todo-list' },
  { title: 'Weatherly', description: 'A weather app that provides weather updates for a particular city, including chances of rain. Utilized the Weatherly API.', image: weatherlyImage, link: 'https://github.com/gaya1711/weather/tree/master' },
  { title: 'Sign Up', description: 'A sign-up project where user details are stored in the backend.', image: signUpImage, link: 'https://github.com/gaya1711/sign-up' },
  { title: 'Dice Dual', description: 'A dice game built using HTML, CSS, and JavaScript.', image: diceDualImage, link: 'https://gaya1711.github.io/dualdice/' },
  { title: 'Purrfect Match', description: 'A website built using Bootstrap. It\'s a Tinder-like website for cats.', image: purrfectMatchImage, link: 'https://gaya1711.github.io/purrfect/' },
];

const Projects = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (projectsSection && scrollIndicator) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
          scrollIndicator.style.display = 'block';
        } else {
          scrollIndicator.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ProjectsContainer id="projects">
      <ProjectsHeader>Projects</ProjectsHeader>
      <TopRightArrow />
      <ProjectsWrapper>
        {projects.map((project, index) => (
          <ProjectCard key={index} href={project.link} target="_blank" rel="noopener noreferrer">
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsWrapper>
      <ScrollIndicator className="scroll-indicator" />
    </ProjectsContainer>
  );
};

export default Projects;
