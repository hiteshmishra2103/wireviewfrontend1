import Link from 'next/link'
import styles from '../styles/500.module.css'

export default function Custom500() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>500 - Server-side error occurred</h1>
            <p className={styles.message}>Something went wrong on our end. Please try again later.</p>
            <div className={styles.linkContainer}>
                <Link href="/">Go back to Home</Link>
            </div>
        </div>
    )
}
