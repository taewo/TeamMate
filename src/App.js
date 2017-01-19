import React from 'react';
import { Link } from 'react-router'

 
export default class App extends React.Component {
    render() {
        return (
        	<div>
	            <h1>This is HOT!!!!!</h1>
	            <h2><Link to='/'>Landing 이동!!!</Link></h2>
		        <h2><Link to='/test1'>LogIn!!</Link></h2>
		        <h2><Link to='/test2'>@@MYDress</Link></h2>
	        </div>
        )
    }
}