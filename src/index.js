import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { RateProvider } from './context/rateContext';

ReactDOM.render(
    <BrowserRouter>
        <RateProvider>
            <App />
        </RateProvider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
