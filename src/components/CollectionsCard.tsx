import React from 'react'
import styles from '../styles/Collections.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';

const CollectionsCard = ({ Name, quantity, imgUrl, alt, href }) => {
    const router = useRouter();
    return (
        <div className={styles.header__product__card__container} onClick={() => {
            router.push(href)
        }}>
            <div className={styles.header__product__card}>
                <Image src={imgUrl} className={styles.collectionsImage} alt={alt} />
                <div className={styles.intro}>
                    <h2 className={styles.collectionsHeader}>{Name}</h2>
                    <p className={styles.quantity}>{quantity} products</p>
                </div>
            </div>
        </div>
    )
}

export default CollectionsCard