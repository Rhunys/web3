import React from 'react';
import { Context as CountersContext } from "/src/contexts/CountersContext";

function OkButton() {
    const { ok, increaseOk } = React.useContext(CountersContext);

    return(

        <div>
            <p>Ok : {ok}</p>
            <button onClick={increaseOk}>increase ok</button>
        </div>
    );
}

export default OkButton;