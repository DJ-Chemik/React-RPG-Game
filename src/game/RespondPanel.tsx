import React from "react";
import './../css/RespondPanel.css';

interface IResponds{
    responds?: string[],
}

const RespondPanel = (props: IResponds) => {
    
    const handleClick = () => {
        
    }

    const showResponds = () => {
        if(props.responds){
            return(
                props.responds.map( (answer) => {
                    return(
                        <li>
                            <input type="button" onClick={handleClick}></input>
                            {answer}
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