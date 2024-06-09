//App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <About />
      <Projects />
      <Contact />
    </AppContainer>
  );
};

export default App;

