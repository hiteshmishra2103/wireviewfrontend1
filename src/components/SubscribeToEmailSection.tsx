import React from 'react'
import SubscribeToEmail from '../../public/SubscribeToEmail/SubscribeToEmail.webp'
import Image from 'next/image'
import Button from '@/components/Button'
import styles from '../styles/SubscribeToEmail.module.css'

const SubscribeToEmailSection = () => {
    return (
        <div className={styles.SubscribeToEmailBanner}>
            <div className={styles.ImageContainer}>
                <Image src={SubscribeToEmail} className={styles.SubscribeToEmailImage} />
            </div>
            <div className={styles.EnterEmailContent}>
                <h3 className={styles.EnterEmailHeading}>
                    Subscribe to our Emails</h3>
                <p className={styles.EnterEmailCaption}>
                    Subscribe to our email list and get exclusive offers and discounts!</p>
            </div>

            <div className={styles.ImageMask}>

            </div>
            <div className={styles.EnterEmailSection}>

                <div className={styles.EnterEmail}>
                    <input type="text" placeholder="Enter your email" className={styles.inputBox} />
                </div>
                <button className={styles.btn} >
                    Subscribe
                </button>

            </div>
        </div>
    )
}

export default SubscribeToEmailSection