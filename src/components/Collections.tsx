import React from 'react'
import CollectionsCard from './CollectionsCard'
import catComputers from '../../public/Collections/cat-computers.webp'
import watch from '../../public/Collections/catwatch.webp'
import headPhone from '../../public/Collections/cat-audio.webp'
import mobile from '../../public/Collections/cat-cellphones.webp'
import styles from '../styles/Collections.module.css'

const Collections = () => {
    return (
        <div className={styles.Collections__Card__Container}>
            <div className={styles.Collections__Card__Title}>
                <div className={styles.title}>
                    Collections
                </div>
                <hr className={styles.line} />
            </div>
            <div className={styles.Collections__card__group}>
                <CollectionsCard Name="Wireview Premium Watch" quantity={40} imgUrl={watch} alt="Wireview Premium Watch" href={'/watch'} />
                <CollectionsCard Name="Computer & Laptops" quantity={8} imgUrl={catComputers} alt="Computer & Laptops" href={'/computer'}/>
                <CollectionsCard Name="Cellphone" quantity={5} imgUrl={mobile} alt="Cellphone" href={'/cellphones'} />
                <CollectionsCard Name="Accessories" quantity={16} imgUrl={headPhone} alt="Accessories" href={'/accessories'} />
            </div>
        </div>
    )
}

export default Collections