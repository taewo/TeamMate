import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './App';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Layout from './Layout';
// import Landing from './Landing';
import {
	Landing,
	Dashboard
} from './export';





let rootElement = document.getElementById('root');
 
ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' component={Layout}>
	        <IndexRoute component={Landing} />
	        <Route path='/dashboard' component={Dashboard} />
	        <Route path='/test' component={App} />
			<Route path='/test1' component={Test1} />
			<Route path='/test2' component={Test2} />
		</Route>
	</Router>
), rootElement);

