import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import About from '../About';
import ProgramStages from '../ProgramStages';
import Timeline from '../Timeline';
import Criteria from '../Criteria';
import Register from '../Register';
import Impact from '../Impact';
import Sponsors from '../Sponsors';
import VolunteerTeam from '../VolunteerTeam';
import Footer from '../Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <ProgramStages />
      <Timeline />
      <Criteria />
      <Register />
      <Impact />
      <VolunteerTeam />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default HomePage;