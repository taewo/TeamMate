import React from 'react';
import styles from './Landing.css';
 
export default class Landing extends React.Component {
    componentWillMount() {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
    }
 
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.hello}>
                    Team Mate
                </div>
            </div>
        );
    }
}