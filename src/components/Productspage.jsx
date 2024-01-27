import React from 'react'
import Image from 'next/image'
import productPageImage from '../../public/ProductsPage/computers-shop-banner.webp'
import Link from 'next/link'
import styles from '../styles/ProductsPage.module.css'
const ProductsPage = ({ name }) => {
    return (
        <>
            {/* <ProductCardSlider /> */}
            <div className={styles.ProductsPageHeaderContent}>
                <div className={styles.ProductPageImageContainer}>
                    <Image alt='' src={productPageImage} className={styles.ProductPageImage} />
                </div>
                <div className={styles.ImageMask}>

                </div>
                <h2 className={styles.productPageHeaderTitle}>{name}</h2>
            </div>
            <div className={styles.collectionIconContainer}>
                <div className={styles.collectionsIcons}>
                    <Link href='/computer'>
                        <div className={styles.collectionIcon}>
                            <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><rect x="8.93499" y="2.61919" width="12.4458" height="18.7616" rx="0.619195" stroke="currentColor" stroke-width="1.23839"></rect>
                                <path d="M17.1703 15.5C17.1703 16.5092 16.2996 17.3808 15.1579 17.3808C14.0162 17.3808 13.1455 16.5092 13.1455 15.5C13.1455 14.4908 14.0162 13.6192 15.1579 13.6192C16.2996 13.6192 17.1703 14.4908 17.1703 15.5Z" stroke="currentColor" stroke-width="1.23839"></path>
                                <line x1="13.1455" y1="6.38081" x2="17.1703" y2="6.38081" stroke="currentColor" stroke-width="1.23839" stroke-linecap="round"></line>
                                <line x1="13.1455" y1="9.38081" x2="17.1703" y2="9.38081" stroke="currentColor" stroke-width="1.23839" stroke-linecap="round"></line>
                                <path d="M6.21053 4.5H2V16H6.21053M3.57895 19.5H6.21053" stroke="currentColor" stroke-width="1.23839" stroke-linecap="round"></path></svg>
                            <div className={styles.collectionIconInfo}>

                                Computer & Laptops

                                <span className={styles.textSmall}>
                                    8 products
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link href='/cellphones'>
                        <div className={styles.collectionIcon}>
                            <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M18.5 23H6.5C6.10218 23 5.72064 22.842 5.43934 22.5607C5.15804 22.2794 5 21.8978 5 21.5V3.5C5 3.10218 5.15804 2.72064 5.43934 2.43934C5.72064 2.15804 6.10218 2 6.5 2H18.5C18.8978 2 19.2794 2.15804 19.5607 2.43934C19.842 2.72064 20 3.10218 20 3.5V21.5C20 21.8978 19.842 22.2794 19.5607 22.5607C19.2794 22.842 18.8978 23 18.5 23ZM6.5 3.5V21.5H18.5V3.5H6.5Z" fill="currentColor"></path>
                                <path d="M14 20.75H11C10.8011 20.75 10.6103 20.671 10.4697 20.5303C10.329 20.3897 10.25 20.1989 10.25 20C10.25 19.8011 10.329 19.6103 10.4697 19.4697C10.6103 19.329 10.8011 19.25 11 19.25H14C14.1989 19.25 14.3897 19.329 14.5303 19.4697C14.671 19.6103 14.75 19.8011 14.75 20C14.75 20.1989 14.671 20.3897 14.5303 20.5303C14.3897 20.671 14.1989 20.75 14 20.75Z" fill="currentColor"></path>
                                <path d="M17 18.5H8C7.80109 18.5 7.61032 18.421 7.46967 18.2803C7.32902 18.1397 7.25 17.9489 7.25 17.75C7.25 17.5511 7.32902 17.3603 7.46967 17.2197C7.61032 17.079 7.80109 17 8 17H17C17.1989 17 17.3897 17.079 17.5303 17.2197C17.671 17.3603 17.75 17.5511 17.75 17.75C17.75 17.9489 17.671 18.1397 17.5303 18.2803C17.3897 18.421 17.1989 18.5 17 18.5Z" fill="currentColor"></path></svg>

                            <div className={styles.collectionIconInfo}>

                                Cellphones & Accessories

                                <span className={styles.textSmall}>
                                    22 products
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link href='/watch'>
                        <div className={styles.collectionIcon}>
                            <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <div className={styles.collectionIconInfo}>


                                Wireview Premium Watch

                                <span className={styles.textSmall}>
                                    40 products
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link href='/audiovideo'>
                        <div className={styles.collectionIcon}>
                            <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><rect x="3.60606" y="2.60606" width="13.1284" height="19.2744" rx="1.21212" stroke="currentColor" stroke-width="1.21212"></rect>
                                <ellipse cx="6.07297" cy="5.07303" rx="1.02433" ry="1.02433" fill="currentColor"></ellipse>
                                <ellipse cx="6.07297" cy="19.4136" rx="1.02433" ry="1.02433" fill="currentColor"></ellipse>
                                <ellipse cx="14.2676" cy="5.07303" rx="1.02433" ry="1.02433" fill="currentColor"></ellipse>
                                <ellipse cx="14.2676" cy="19.4136" rx="1.02433" ry="1.02433" fill="currentColor"></ellipse>
                                <path d="M10.1703 17.971C12.2022 17.971 13.8493 16.3239 13.8493 14.292C13.8493 12.2601 12.2022 10.6129 10.1703 10.6129C8.13842 10.6129 6.49126 12.2601 6.49126 14.292C6.49126 16.3239 8.13842 17.971 10.1703 17.971Z" stroke="currentColor" stroke-width="1.21212"></path>
                                <path d="M10.1703 8.75201C11.0707 8.75201 11.8007 8.02206 11.8007 7.12162C11.8007 6.22118 11.0707 5.49123 10.1703 5.49123C9.26985 5.49123 8.5399 6.22118 8.5399 7.12162C8.5399 8.02206 9.26985 8.75201 10.1703 8.75201Z" stroke="currentColor" stroke-width="1.21212"></path>
                                <path d="M10.1703 15.9224C11.0707 15.9224 11.8007 15.1925 11.8007 14.292C11.8007 13.3916 11.0707 12.6616 10.1703 12.6616C9.26985 12.6616 8.5399 13.3916 8.5399 14.292C8.5399 15.1925 9.26985 15.9224 10.1703 15.9224Z" stroke="currentColor" stroke-width="1.21212"></path>
                                <path d="M19.3892 14.7167C21.4379 13.1419 21.4379 10.7009 19.3892 9.1261" stroke="currentColor" stroke-width="1.21212" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.3112 17C23.8963 14.2441 23.8963 9.75591 20.3112 7" stroke="currentColor" stroke-width="1.21212" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                            <div className={styles.collectionIconInfo}>

                                Audio and Video
                                <span className={styles.textSmall}>
                                    22 products
                                </span>
                            </div>

                        </div>
                    </Link>
                    <Link href='/accessories'>
                        <div className={styles.collectionIcon}>
                            <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><rect x="3.58824" y="2.58824" width="16.8235" height="18.8236" rx="0.588237" stroke="currentColor" stroke-width="1.17647"></rect>
                                <path d="M12 18.625C14.7614 18.625 17 16.3865 17 13.625C17 10.8636 14.7614 8.625 12 8.625C9.23858 8.625 7 10.8636 7 13.625C7 16.3865 9.23858 18.625 12 18.625Z" stroke="currentColor" stroke-width="1.17647" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M6.5 5.5H9.625" stroke="currentColor" stroke-width="1.17647" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.5 5.5H17.75" stroke="currentColor" stroke-width="1.17647" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.625 13.625C9.625 12.962 9.88839 12.3261 10.3572 11.8572C10.8261 11.3884 11.462 11.125 12.125 11.125" stroke="currentColor" stroke-width="1.17647" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <div className={styles.collectionIconInfo}>
                                Accessories
                                <span className={styles.textSmall}>
                                    22 products
                                </span>
                            </div>

                        </div>
                    </Link>
                </div>
            </div >
        </>
    )
}

export default ProductsPage