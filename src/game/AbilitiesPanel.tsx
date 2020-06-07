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
            <b>Siła:</b> {props.strength}/10<br/>
            <b>Zręczność:</b> {props.dexterity}/10<br/>
            <b>Szczęście:</b> {props.luck}/10<br/>
        </div>
    );
}

export default AbilitiesPanel;