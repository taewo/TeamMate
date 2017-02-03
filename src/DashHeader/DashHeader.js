import React from 'react';
import styles from './DashHeader.css';
// import styles from './DashHeader.css';
import { PageHeader } from 'react-bootstrap';



export default class DashHeader extends React.Component {
	render(){
		return (
			<PageHeader>
				<div className={styles.dashHeader}>
					Team Mate
				</div>
			</PageHeader>
		)
	}
}