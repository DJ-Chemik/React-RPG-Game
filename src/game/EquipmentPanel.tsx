import React, { useState, useEffect } from "react";
import './../css/EquipmentPanel.css';

interface IEquipmentStructure {
    sword?: string,
    items?: string[],
    dukats?: number,
}

const EquipmentPanel = (props: IEquipmentStructure) => {
    const [sword, setSword] = useState<string>("---");
    const [items, setItems] = useState<string[]>(["---"]);
    const [dukats, setDukats] = useState<number>(0);
    
    useEffect( () => {
        if (props.sword) {
            setSword(props.sword);
        }
        if (props.items) {
            setItems(props.items);
        }
        if (props.dukats) {
            setDukats(props.dukats);
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
            <b>Broń:</b> {sword} <br/>
            <b>Dukaty:</b> {dukats}
            <ul>
                <b>Przedmioty:</b>
                {listOfItems()}
            </ul>
        </div>
    );
    
}

export default EquipmentPanel;