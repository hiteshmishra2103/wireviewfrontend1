import React from 'react';
import styles from '../styles/cancel.module.css';


const Cancel = () => {
    return (
        <div className={styles.cancelContainer}>
            <div className={styles.cancelMessage}>
                Payment Cancelled
            </div>
        </div>
    )
}



export default Cancel;


