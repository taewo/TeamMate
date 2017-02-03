import React from 'react';
import styles from './Dashboard.css';
import {
	DashHeader,
	SlidingMenu
} from '../export';

export default class Dashboard extends React.Component {
	render(){
		return (
			<div>
			{/*<button type="button">*/}
				<SlidingMenu />
			{/*</button>*/}
				<DashHeader >
					Dashboard	
				</DashHeader>
			
			</div>
		)
	}
}