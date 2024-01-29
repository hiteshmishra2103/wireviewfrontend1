import React from 'react'
import Link from 'next/link'
import styles from '../styles/Button.module.css'
import compareIcon from '../../public/header/balance.png'
import Image from 'next/image'
type ButtonProps = {
    text: string;
    ht: string;
};

const Button = ({ text, ht }: ButtonProps) => {
    return (
        <div className={styles.btnContainer}>
            <div className={styles.mask}>
                <button className={styles.btn} style={{ height: ht }} >
                    {text}
                </button>
            </div>
        </div>

    )
}

export default Button