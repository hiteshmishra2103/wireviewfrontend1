
import Link from 'next/link';
import styles from '../styles/Success.module.css'


const SuccessPage = () => {
    return (
        <div className={styles.successContainer}>
            <h1 className={styles.successHeading}>Successfully Purchased &#129395;</h1>
            <Link href={'/ordershistory'}>
                <p>OrdersHistory</p>
            </Link>
        </div>
    )


}



export default SuccessPage;

