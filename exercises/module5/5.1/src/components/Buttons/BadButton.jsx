import React from 'react';
import { Context as CountersContext } from "/src/contexts/CountersContext";

function BadButton() {
    const { bad, increaseBad } = React.useContext(CountersContext);

    return(
        <div>
            <p>Bad : {bad}</p>
            <button onClick={increaseBad}>increase bad</button>
        </div>
    );
}

export default BadButton;