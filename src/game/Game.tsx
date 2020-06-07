import React from 'react';
import './../css/Game.css';
import ContentPanel from './ContentPanel';
import RespondPanel from './RespondPanel';
import EquipmentPanel from './EquipmentPanel';
import AbilitiesPanel from './AbilitiesPanel';

function Game() {
  return (
    <div className="Game">
      <div className="action">
        <ContentPanel/>
        <RespondPanel/>
      </div>
      <div className="gui">
        <EquipmentPanel/>
        <AbilitiesPanel strength={0} dexterity={0} luck={0}/>
      </div>
    </div>
  );
}

export default Game;
