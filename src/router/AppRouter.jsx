import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { GetRatePage } from '../rates/pages/GetRatePage';
import { RateHistoryPage } from '../rates/pages/RateHistoryPage';



export const AppRouter = () => {
    return (
        <React.Fragment>


            <Routes>

                <Route path="history" element={<RateHistoryPage />} />

                <Route path="rate" element={<GetRatePage />} />

                <Route path="/*" element={< GetRatePage />} />


            </Routes>

            </React.Fragment>
    )
}