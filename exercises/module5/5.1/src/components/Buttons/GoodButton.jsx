import React from 'react';
import { Context as CountersContext } from "/src/contexts/CountersContext";

function OkButton() {
    const { good, increaseGood } = React.useContext(CountersContext);

    return(

        <div>
            <p>Good : {good}</p>
            <button onClick={increaseGood}>increase good</button>
        </div>
    );
}

export default OkButton;