import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
//redux config
import { Provider } from 'react-redux'; //untuk menghubungkan antara action, reducer, dan juga komponen
import { createStore } from 'redux';//untuk membuat global store untuk reducer
import {Reducers} from './reducers'

const storeReducer = createStore(Reducers)

ReactDOM.render(
    <Provider store={storeReducer}>
        {/*Browser router: penghubung seluruh page yang di akomodir oleh App.js*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
