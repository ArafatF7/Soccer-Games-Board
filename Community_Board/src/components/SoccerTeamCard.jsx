import React from 'react';




const SoccerTeamCard = ({ team }) => {
 
  return (
    <div className="soccer-team-card">


      <img src={team.logo} alt={team.name} />
      <h3>{team.name}</h3>
      <button onClick={() => window.open(team.scheduleLink, '_blank')}>View Schedule</button>
    
    
    </div>
  );
};

export default SoccerTeamCard;
