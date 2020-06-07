import React from "react";
import './../css/ContentPanel.css';

interface IContent{
    content?: string,
}

const ContentPanel = (props: IContent) => {
    if(props.content){
        return(
            <div className="ContentPanel">
                {props.content}
            </div>
        );
    }else{
        return(
            <div className="ContentPanel">
                <br/><br/><br/><br/><br/>
            </div>
        );
    }
    
}

export default ContentPanel;