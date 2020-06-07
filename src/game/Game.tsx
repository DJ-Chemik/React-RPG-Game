import React from 'react';
import './../css/Game.css';
import ContentPanel from './ContentPanel';
import RespondPanel from './RespondPanel';
import EquipmentPanel from './EquipmentPanel';
import AbilitiesPanel from './AbilitiesPanel';

function Game() {

  const sword = "Miecz Posejduma";
  const items = ["eliksir zręczności", "kurtka skórzana"];

  return (
    <div className="Game">
      <div className="action">
        <ContentPanel/>
        <RespondPanel/>
      </div>
      <div className="gui">
        <EquipmentPanel 
          sword={sword} 
          items={items}
        />
        <AbilitiesPanel strength={0} dexterity={0} luck={0}/>
      </div>
    </div>
  );
}

export default Game;
