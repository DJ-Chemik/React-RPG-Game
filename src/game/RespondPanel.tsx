import React from "react";
import './../css/RespondPanel.css';
import { IAnswer } from "./Game";

interface IResponds{
    responds?: IAnswer[],
    onChooseAnswer: (id: number, nextStep: number)=>void,
}

const RespondPanel = (props: IResponds) => {
    
    const handleClick = (id: number, nextStep:number) => {
        props.onChooseAnswer(id, nextStep);
        return(undefined);
    }

    const showResponds = () => {
        if(props.responds){
            return(
                props.responds.map( (answer) => {
                    return(
                        <li key={answer.id}>
                            <input type="button" onClick={ () => {handleClick(answer.id, answer.nextStep)}}></input>
                            {answer.value}
                        </li>
                    );
                })
            )
        }else{
            return(null);
        }
    }

    return(
        <div className="RespondPanel">
            {showResponds()}
        </div>
    );
}

export default RespondPanel;