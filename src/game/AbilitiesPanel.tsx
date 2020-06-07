import React from "react";
import './../css/AbilitiesPanel.css';

interface IStatusSkills{
    strength: number,
    dexterity: number,
    luck: number,
};

const AbilitiesPanel = (props : IStatusSkills) => {

    return(
        <div className="AbilitiesPanel">
            Siła: {props.strength}/10<br/>
            Zręczność: {props.dexterity}/10<br/>
            Szczęście: {props.luck}/10<br/>
        </div>
    );
}

export default AbilitiesPanel;