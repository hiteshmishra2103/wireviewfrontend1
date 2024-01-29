import React from 'react'
import styles from '../styles/Header-product-card.module.css'
const HeaderProductCard = () => {
    return (
        <div className={styles.header__product__card__container}>
            <div className={styles.header__product__card}>
                <img
                    src="../responsive-navigation-bar//assets//cat-computers.webp"
                    alt=""
                />
                <div className={styles.intro}>
                    <h2>Pinnacle</h2>
                    <p>To Dominate</p>
                    <div className={styles.mask}>
                        <button className={styles.btn}>
                            hover me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderProductCard;