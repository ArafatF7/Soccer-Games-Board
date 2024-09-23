import React from 'react';
import SoccerTeamCard from './components/SoccerTeamCard';
import './App.css';



import arsenalLogo from './assets/images/Arsenal.jpg';
import atleticoLogo from './assets/images/Atlético Madrid.png';
import barcelonaLogo from './assets/images/Barcelona.png';
import bayerLogo from './assets/images/Bayer Leverkusen.png';
import bayernLogo from './assets/images/Bayern Munich.png';
import dortmundLogo from './assets/images/Borussia Dortmund.png';
import interMilanLogo from './assets/images/Inter Milan.png';
import liverpoolLogo from './assets/images/Liverpool.png';
import manCityLogo from './assets/images/Manchester City.png';
import psgLogo from './assets/images/PSG.png';
import realMadridLogo from './assets/images/Real Madrid.png';
import sportingCPLogo from './assets/images/Sporting CP.png';



const soccerTeams = [
  { name: 'Arsenal', logo: arsenalLogo, scheduleLink: 'https://www.fotmob.com/teams/9825/fixtures/arsenal' },
  { name: 'Atlético Madrid', logo: atleticoLogo, scheduleLink: 'https://www.fotmob.com/teams/9906/fixtures/atletico-madrid' },
  { name: 'Barcelona', logo: barcelonaLogo, scheduleLink: 'https://www.fotmob.com/teams/8634/fixtures/barcelona' },
  { name: 'Bayer Leverkusen', logo: bayerLogo, scheduleLink: 'https://www.fotmob.com/teams/8178/fixtures/bayer-leverkusen' },
  { name: 'Bayern Munich', logo: bayernLogo, scheduleLink: 'https://www.fotmob.com/teams/9823/fixtures/bayern-munchen' },
  { name: 'Borussia Dortmund', logo: dortmundLogo, scheduleLink: 'https://www.fotmob.com/teams/9789/fixtures/borussia-dortmund' },
  { name: 'Inter Milan', logo: interMilanLogo, scheduleLink: 'https://www.fotmob.com/teams/8636/fixtures/inter' },
  { name: 'Liverpool', logo: liverpoolLogo, scheduleLink: 'https://www.fotmob.com/teams/8650/fixtures/liverpool' },
  { name: 'Manchester City', logo: manCityLogo, scheduleLink: 'https://www.fotmob.com/teams/8456/fixtures/manchester-city' },
  { name: 'PSG', logo: psgLogo, scheduleLink: 'https://www.fotmob.com/teams/9847/fixtures/paris-saint-germain' },
  { name: 'Real Madrid', logo: realMadridLogo, scheduleLink: 'https://www.fotmob.com/teams/8633/fixtures/real-madrid' },
  { name: 'Sporting CP', logo: sportingCPLogo, scheduleLink: 'https://www.fotmob.com/teams/9768/fixtures/sporting-cp' },
];



const App = () => {
  
  return (
    <div className="app">
      
      <h1>Soccer Teams Community Board</h1>
      
      
      <div className="soccer-team-list">
        {soccerTeams.map(team => (
          <SoccerTeamCard key={team.name} team={team} />
        ))}
      </div>
    
    
    </div>
  );
};

export default App;
