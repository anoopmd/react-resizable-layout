import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import GlobalStyle from './global-styles';

render((
  <div>
    <h4 className="title">React Resizable Layout</h4>
    <App />
    <GlobalStyle/>
  </div>
), document.getElementById('app'));