import React, { useContext } from 'react'
import { RateContext } from '../../context/rateContext';

export const SearchButton = () => {

    const [Rates, setRates] = useContext(RateContext);

    const searchRate = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "base": "CAD",
                "amount": 10,
                "symbol": ["USD", "EUR"],
                "date": "1985-03-15"
            })
        };
        fetch('http://localhost:8888/api/0.1/', requestOptions)
            .then(response => response.json())
            .then(data => {
                setRates(() => {
                    return data;
                });
            });

    };


    return (
        <button onClick={searchRate} className='search-button'>GO</button>
    )
}
