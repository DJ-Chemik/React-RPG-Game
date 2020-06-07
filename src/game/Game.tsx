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
  const [dukats, setDukats] = useState(1000);
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

  const randomWithProbability = (probability: number) => {
    const randomNumber = Math.random();
    const playerChance = probability/100; //Convert percentage to number in range <0,100>
    if(randomNumber<=playerChance){
      return true;
    }else{
      return false;
    }
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

  //next 4 or (5 or 6)
  const handleStep3 = (decision: number, nextStep: number) => {
    if(decision===1){
      setActualStep(nextStep);
      getPlotFragment(nextStep);
    }else{
      let result: boolean;
      if(abilities.luck>2){
        result = randomWithProbability(70);
      }else{
        result = randomWithProbability(50);
      }

      if(result){
        setActualStep(5);
        getPlotFragment(5);
      }else{
        setActualStep(6);
        getPlotFragment(6);
      }
    }
  }

  const handleStep5 = (decision: number, nextStep: number) => {
    changeStrength(1);
    setActualStep(nextStep);
    getPlotFragment(nextStep);
  }

  const handleStep6 = (decision: number, nextStep: number) => {
    const minus = Math.round( Math.random()*100 );
    setDukats(dukats-minus);
    setActualStep(nextStep);
    getPlotFragment(nextStep);
  }

  const handleAnswer = (decision: number, nextStep: number) => {
    if(actualStep===0){
      handleStep0(decision);
    }else if(actualStep===3){
      handleStep3(decision, nextStep);
    }else if(actualStep===5){
      handleStep5(decision, nextStep);
    }else if(actualStep===6){
      handleStep6(decision, nextStep);
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
          dukats={dukats}
        />
        <AbilitiesPanel strength={abilities?.strength} dexterity={abilities?.dexterity} luck={abilities?.luck}/>
      </div>
    </div>
  );
}

export default Game;
