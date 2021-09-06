import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import App from './componentes/App';
import reactDom from 'react-dom';
import 'bootstrap/dist/js/bootstrap.js' 

const container = document.getElementById('root')

reactDom.render(<App />,container)