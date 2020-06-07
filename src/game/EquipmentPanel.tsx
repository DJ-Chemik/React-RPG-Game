import React, { useState, useEffect } from "react";
import './../css/EquipmentPanel.css';

interface IEquipmentStructure {
    sword?: string,
    items?: string[],
}

const EquipmentPanel = (props: IEquipmentStructure) => {
    const [sword, setSword] = useState<string>("---");
    const [items, setItems] = useState<string[]>(["---"]);
    
    useEffect( () => {
        if (props.sword) {
            setSword(props.sword);
        }
        if (props.items) {
            setItems(props.items);
        }
    }, [props]);

    const listOfItems = () => {
        return(
            items.map( (item) => {
                return(
                    <li key={Math.random()}>
                        {item}
                    </li>
                );
            })
        );
    }

    return(
        <div className="EquipmentPanel">
            <b>Miecz:</b> {sword} <br/>
            <ul>
                <b>Przedmioty:</b>
                {listOfItems()}
            </ul>
        </div>
    );
    
}

export default EquipmentPanel;