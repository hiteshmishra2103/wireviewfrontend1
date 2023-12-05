import React from 'react'
import GalleryCard from './GalleryCard'
import styles from '../styles/GalleryCard.module.css'
import cellphone from '../../public/Gallery/cellphone.webp'
import headphones from '../../public/Gallery/headphone.webp'
import accessories from '../../public/Gallery/accessories.webp'
import Watch from '../../public/Gallery/smartwatch.webp'

const Categories = () => {
  return (
    <div className={styles.galleryCardContainer}>
      <GalleryCard name='Cellphones' imgUrl={cellphone} cardHeading='Cellphones' cardCaption='Super cellphones is almost here' />
      <GalleryCard name='AudioVideo' imgUrl={headphones} cardHeading='Audio & Video' cardCaption="The Future' s Bright. The Future's Headphones." />
      <GalleryCard name='Accessories' imgUrl={accessories} cardHeading='Accessories' cardCaption='We Bring Accessories to Life' />
      <GalleryCard name='Watch' imgUrl={Watch} cardHeading='Wireview Premium Watches' cardCaption='Watch Is Good For You' />
    </div>
  )
}

export default Categories