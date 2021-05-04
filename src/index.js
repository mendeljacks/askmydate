import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './main'
import {toJS} from 'mobx'

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

window.toJS = toJS