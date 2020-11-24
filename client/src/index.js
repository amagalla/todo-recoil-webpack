import React from 'react';
import {render} from 'react-dom';
import App from './App'
import RecoilizeDebugger from 'recoilize';
import { RecoilRoot } from 'recoil';

import './styles/styles.css'

render(<React.StrictMode>
    <RecoilRoot>
      <RecoilizeDebugger />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'))