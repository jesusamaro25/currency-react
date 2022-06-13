import React, { useState, createContext } from 'react';

const RateContext = createContext();

function RateProvider(props) {

    const [Rates, setRates] = useState({});

    return (
        <RateContext.Provider value={[Rates, setRates]}>
            {props.children}
        </RateContext.Provider>
    );
}

export { RateContext, RateProvider };