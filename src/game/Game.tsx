import React, { useState, useEffect } from 'react';
import './../css/Game.css';
import ContentPanel from './ContentPanel';
import RespondPanel from './RespondPanel';
import EquipmentPanel from './EquipmentPanel';
import AbilitiesPanel from './AbilitiesPanel';
import plot from './../data/plot.json';

export interface IAnswer{
  id: number,
  value: string
}

export interface IDecision{

}

export interface INewSkill{
  name: string,
  value: number,
}

interface IPlotFragment{
  id: number,
  content: string,
  responds: IAnswer[],
  decision?: IDecision,
  newSword?: string,
  newItems?: string[],
  newSkills?: []
}

function Game() {
  // eslint-disable-next-line 
  const [sword, setSword] = useState("Gołe pięści");
  // eslint-disable-next-line 
  const [items, setItems] = useState(["Eliksir zręczności"]);
  const [plotFragment, setPlotFragment] = useState<IPlotFragment | null>();

  useEffect( () => {
    getPlotFragment(0);
  }, [])

  
  const getPlotFragment = (id: number) => {   
    let plotPiece = plot.map( (element) => {
      if(id===element.id){
        return(element);
      }
      return undefined;
    })
    
    plotPiece = plotPiece.filter( (element)=>{
      return(element!==undefined);
    })

    setPlotFragment(plotPiece[0]);
    return(plotPiece[0])
  }

  const handleAnswer = (id: number) => {
    getPlotFragment(id);
  }

  

  return (
    <div className="Game">
      <div className="action">
        <ContentPanel
          content={plotFragment?.content}
        />
        <RespondPanel
          responds={plotFragment?.responds}
          onChooseAnswer={handleAnswer}
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
