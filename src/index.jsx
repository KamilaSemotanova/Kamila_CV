import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './page/Contact';
import { About } from './page/About';
import { Work } from './page/Work';
import { Questions } from './page/Questions';
import { Project } from './page/Project';
import { Education } from './page/Education';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Education />
        <Work />
        <Questions />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
