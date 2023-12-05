import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function Custom404() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.message}>The page you are looking for does not exist.</p>
            <div className={styles.linkContainer}>
                <Link href="/">Go back to Home</Link>
            </div>
        </div>
    )
}
