import React, { useState } from 'react';
import './../css/Game.css';
import ContentPanel from './ContentPanel';
import RespondPanel from './RespondPanel';
import EquipmentPanel from './EquipmentPanel';
import AbilitiesPanel from './AbilitiesPanel';

function Game() {
  const [sword, setSword] = useState("Gołe pięści");
  const [items, setItems] = useState(["Eliksir zręczności"]);

  return (
    <div className="Game">
      <div className="action">
        <ContentPanel
          content={"Witaj przybyszu!"}
        />
        <RespondPanel
          responds={["a","b","c"]}
        />
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
