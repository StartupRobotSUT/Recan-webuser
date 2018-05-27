import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
// import NotFound from './404not'
const historys = createBrowserHistory()
ReactDOM.render(
	<Router history={historys}>
  		<App/>
	</Router>
, document.getElementById('root'));
registerServiceWorker();
