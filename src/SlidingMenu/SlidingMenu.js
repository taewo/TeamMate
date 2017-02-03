import React from 'react';
import styles from './SlidingMenu.css';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);


export default class SlidingMenu extends React.Component {
	render(){
		return (
			 <Menu className={styles.back}  width={123} pageWrapId={"page-wrap"}>
		        <RadiumLink className="menu-item" to="/home">Home</RadiumLink>
		        <RadiumLink className="menu-item" to="/settings">Settings</RadiumLink>
		        <RadiumLink className="menu-item" to="/blablabla">Blablabla</RadiumLink>
			</Menu> 
		)
	}
}