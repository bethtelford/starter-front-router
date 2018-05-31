import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './registerServiceWorker';

import './reset.css';
import './base.css';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
