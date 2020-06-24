import React from 'react';
import ReactDOM from 'react-dom';

import FirstApp from './FirstApp';

import './index.css';

const divRoot = document.getElementById('root');

ReactDOM.render(<FirstApp greeting="Bienvenido a CounterApp"/>, divRoot)
