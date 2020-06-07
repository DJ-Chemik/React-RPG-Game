import React, { useState, useEffect } from 'react';
import './../css/Game.css';
import ContentPanel from './ContentPanel';
import RespondPanel from './RespondPanel';
import EquipmentPanel from './EquipmentPanel';
import AbilitiesPanel, { IStatusSkills } from './AbilitiesPanel';
import plot from './../data/plot.json';

export interface IAnswer{
  id: number,
  nextStep: number,
  value: string
}

interface IPlotFragment{
  id: number,
  content: string,
  responds: IAnswer[],
}

function Game() {
  // eslint-disable-next-line 
  const [sword, setSword] = useState("Gołe pięści");
  // eslint-disable-next-line 
  const [items, setItems] = useState(["Eliksir zręczności"]);
  // eslint-disable-next-line
  const [abilities, setAbilities] = useState<IStatusSkills>({
    strength:0,
    dexterity:0,
    luck:0
  });
  const [plotFragment, setPlotFragment] = useState<IPlotFragment | null>();
  const [actualStep, setActualStep] = useState<number>(0);
  const [iterator, setIterator] = useState<number>(4);

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

  const changeStrength = (value: number) => {
    let actualStrength = abilities.strength;
    let actualDexterity = abilities.dexterity;
    let actualLuck = abilities.luck;
    const newValue = actualStrength+value
    if(newValue>=10){
      actualStrength = 10;
    }else if(newValue<=0){
      actualStrength = 0;
    }else{
      actualStrength = newValue;
    }
    
    setAbilities({
      strength: actualStrength,
      dexterity: actualDexterity,
      luck: actualLuck
    })
  }

  const changeDexterity = (value: number) => {
    let actualStrength = abilities.strength;
    let actualDexterity = abilities.dexterity;
    let actualLuck = abilities.luck;
    const newValue = actualDexterity+value
    if(newValue>=10){
      actualDexterity = 10;
    }else if(newValue<=0){
      actualDexterity = 0;
    }else{
      actualDexterity = newValue;
    }
    setAbilities({
      strength: actualStrength,
      dexterity: actualDexterity,
      luck: actualLuck
    })
  }

  const changeLuck = (value: number) => {
    let actualStrength = abilities.strength;
    let actualDexterity = abilities.dexterity;
    let actualLuck = abilities.luck;
    const newValue = actualLuck+value
    if(newValue>=10){
      actualLuck = 10;
    }else if(newValue<=0){
      actualLuck = 0;
    }else{
      actualLuck = newValue;
    }
    setAbilities({
      strength: actualStrength,
      dexterity: actualDexterity,
      luck: actualLuck
    })
  }


  const handleStep0 = (decision: number) => {
    if(iterator>0){
      if(decision===1){
        changeStrength(1);
      }else if(decision===2){
        changeDexterity(1);
      }else{
        changeLuck(1);
      }
      setIterator(iterator-1);
    }
    
    if(iterator===1){
      setActualStep(1);
      getPlotFragment(1);
    }
    
  }

  const handleAnswer = (decision: number, nextStep: number) => {
    if(actualStep===0){
      handleStep0(decision);
    }else{
      setActualStep(nextStep);
      getPlotFragment(nextStep);
    }
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
        <AbilitiesPanel strength={abilities?.strength} dexterity={abilities?.dexterity} luck={abilities?.luck}/>
      </div>
    </div>
  );
}

export default Game;
