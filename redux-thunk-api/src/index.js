import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import { postReducer } from './postReducer';
import thunk from 'redux-thunk';

const store= createStore(postReducer, applyMiddleware(thunk))

ReactDOM.render(

<Provider store={store}>
<App />
</Provider>,

  document.getElementById('root')
);

