import React from 'react';
import ReactDOM from 'react-dom';

import dotenv from 'dotenv';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

dotenv.config();

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>
    , document.getElementById('root')
);
    
serviceWorker.unregister();
