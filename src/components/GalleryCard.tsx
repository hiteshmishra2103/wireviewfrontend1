import React from 'react'
import styles from '../styles/GalleryCard.module.css'
import Image from 'next/image'
import cellphone from '../../public/Gallery/cellphone.webp'
import Link from 'next/link'

const GalleryCard = ({ name, imgUrl, cardHeading, cardCaption }) => {
    const url = name === 'Cellphones' ? '/cellphones' : name === 'AudioVideo' ? '/audiovideo' : name === 'Accessories' ? '/accessories' : '/watch'
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
                    <Link href={url}>
                        <button className={styles.btn} >
                            Shop {name}
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default GalleryCard