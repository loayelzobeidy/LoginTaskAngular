import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import Login from './Components/App.jsx';

const app = document.getElementById('app');
ReactDOM.render(<Login/>,app);
