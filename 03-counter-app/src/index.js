import React from 'react';
import ReactDOM from 'react-dom';

/* import FirstApp from './FirstApp'; */
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.getElementById('root');

// ReactDOM.render(<FirstApp greeting='Bienvenido a React'/>, divRoot)
ReactDOM.render(<CounterApp value={10}/>, divRoot)
