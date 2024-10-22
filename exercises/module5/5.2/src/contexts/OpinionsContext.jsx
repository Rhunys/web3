/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const[sortedOpinions, setSortedOpinions] = useState([])
    
    const addOpinion = (opinion) => {
        if(sortedOpinions.find(op => op.name === opinion)) {
            alert(`${opinion} already exists`)

            return
        }

        const newSortedOpinions = sortedOpinions.concat(
        {
            id: uuidv4(),
            text: opinion,
            score: 1,
          });
      
          sortOpinions(newSortedOpinions);
    }

    const sortOpinions = (opinions) => {
        const newSortedOpinions = [...opinions].sort((a, b) => b.score - a.score);
        setSortedOpinions(newSortedOpinions);
    };

    const voteOpinion = (opinionId) => {
        const newSortedOpinions = [...sortedOpinions];
        const opinionToUpdate = newSortedOpinions.find(
        (opinion) => opinion.id === opinionId
        );
        if (!opinionToUpdate) return;

        opinionToUpdate.score += 1;
        sortOpinions(newSortedOpinions);
    }

    const exposedValue = {
        sortedOpinions,
        addOpinion,
        voteOpinion
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
