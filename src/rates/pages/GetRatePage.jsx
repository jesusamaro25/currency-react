import React, { useContext } from 'react'
import { RateContext } from '../../context/rateContext';
import { SearchButton } from '../components/SearchButton'

export const GetRatePage = () => {

    const [Rates, setRates] = useContext(RateContext);

    return (
        <React.Fragment>
            <div className='mb-3'>GetRatePage</div>
            <div className='mb-3'>
                {JSON.stringify(Rates)}
            </div>
            <SearchButton />
        </React.Fragment>
    )
}
