import React from 'react'
import styles from '../styles/GalleryCard.module.css'
import Image from 'next/image'
import cellphone from '../../public/Gallery/cellphone.webp'

const GalleryCard = ({ name, imgUrl, cardHeading, cardCaption }) => {
    return (
        <div className={styles.galleryContainer}>
            <Image src={imgUrl} className={styles.GalleryImage} />
            <div className={styles.galleryItems}>
                <div className={styles.galleryItemContentContainer}>
                    <h3 className={styles.cardHeading}>{cardHeading}</h3>
                    <hr className={styles.galleryItemLine} />
                    <span className={styles.galleryItemCaption}>
                        {cardCaption}
                    </span>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.btn} >
                        Shop {name}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default GalleryCard