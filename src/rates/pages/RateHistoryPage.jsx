import React, { useContext } from 'react'
import { RateContext } from '../../context/rateContext';
import { SearchButton } from '../components/SearchButton'

export const RateHistoryPage = () => {

    const [Rates, setRates] = useContext(RateContext);

    return (
        <React.Fragment>

            <div className='mb-3'>RateHistoryPage</div>

            <div className='mb-3'>
                {JSON.stringify(Rates)}
            </div>
            <SearchButton />

        </React.Fragment>
    )
}
