import React from 'react'
import Image from 'next/image';
import logo from '../../public/header/logo2-removebg-preview.png'
import styles from '../styles/header.module.css'
import arrow from '../../public/header/arrow-down-s-line.svg'
import truck from '../../public/header/truck-line.svg'
import tag from '../../public/header/price-tag-3-line.svg'
import Link from 'next/link'
import HeaderIconsContainer from './HeaderIconsContainer';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';


const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const router = useRouter();
    return (
        <>
            <header className={styles.headercontainer}>
                {/* hamburger login logo search cart */}
                <div className={styles.upperHeaderContainer}>
                    <div className={styles.hamburger} onClick={() => {
                        setIsVisible(!isVisible);

                    }}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className={styles.logoContainer}>
                        <Link href='/'>
                            <Image className={styles.logo}
                                src={logo}
                                alt="Wireview logo"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.searchIconMobile} >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg> */}
                    <SearchBar />

                    <HeaderIconsContainer />
                </div>
                {isVisible && (<nav className={styles.navContainer}>
                    <div className={styles.crossIcon} onClick={() => {
                        setIsVisible(!isVisible);
                    }}></div>

                    <ul className={styles.navList}>
                        <li className={styles.dropdownItem}>
                            <div className={`${styles.navLink} ${styles.dropdownButton}`} onClick={async () => {
                                await router.push('/store');
                                setIsVisible(false);
                            }}>
                                Stores <Image src={arrow} width={20} height={20} alt='arrow' className={styles.dropdownArrow} />
                            </div>
                            <div className={`${styles.dropdownContainer} ${styles.first}`}>
                                <div className={styles.dropdownGroup}>

                                    <span className={styles.dropdownTitle}>Shop</span>
                                    <ul className={styles.dropdownList}>
                                        <li>
                                            <Link href={'/store'} className={`${styles.navLink} ${styles.dropdownLink}`}>Shop The Latest</Link>
                                        </li>
                                        <li>
                                            <Link href={`/computer`} className={`${styles.navLink} ${styles.dropdownLink}`} >
                                                Computer & Tablet
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/cellphones`} className={`${styles.navLink} ${styles.dropdownLink}`}>
                                                Cellphone
                                            </Link>
                                        </li>
                                        <li>
                                            <a href={`/accessories`} className={`${styles.navLink} ${styles.dropdownLink}`}>
                                                Accessories
                                            </a>
                                        </li>
                                        <li>
                                            <Link href={`/watch`} className={`${styles.navLink} ${styles.dropdownLink}`}>Wireview Watch</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.dropdownGroup}>
                                    <span className={styles.dropdownTitle}>Featured</span>
                                    <ul className={styles.dropdownList}>
                                        <li>
                                            <Link href={'/audiovideo'} className={`${styles.navLink} ${styles.dropdownLink}`}>Audio & Video</Link>
                                        </li>
                                        <li>
                                            <Link href={'/cellphones'} className={`${styles.navLink} ${styles.dropdownLink}`}
                                            >Cellphones & Accessories</Link>
                                        </li>
                                        <li>
                                            <Link href={`/watch`} className={`${styles.navLink} ${styles.dropdownLink}`}>Wireview Watch Premium</Link>

                                        </li>
                                    </ul>
                                </div>
                                {/* <div className={styles.dropdownGroup}>
                                    <span className={styles.dropdownTitle}>Bestseller</span>
                                    <ul className={styles.dropdownList}>
                                        <li>
                                            <a href="/computer" className={`${styles.navLink} ${styles.dropdownLink}`}>Laptops</a>
                                        </li>
                                        <li>
                                            <a href="/computer" className={`${styles.navLink} ${styles.dropdownLink}`}> Gaming Laptops</a>
                                        </li>
                                        <li>
                                            <a href="/computer" className={`${styles.navLink} ${styles.dropdownLink}`}>Gaming Desktops </a>
                                        </li>
                                        <li>
                                            <a href="/watch" className={`${styles.navLink} ${styles.dropdownLink}`}>Watch </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </li>
                        <li className={styles.dropdownItem}>
                            <div className={`${styles.navLink} ${styles.dropdownButton}`} onClick={async () => {
                                await router.push('/watch');
                                setIsVisible(false);
                            }}>
                                Watch <Image src={arrow} width={20} height={20} alt='arrow' className={styles.dropdownArrow} />
                            </div>
                            <div className={`${styles.dropdownContainer} ${styles.second}`}>
                                <div className={styles.dropdownGroup}>
                                    <ul className={styles.dropdownList}>
                                        <li>
                                            <a href="/watch" className={`${styles.navLink} ${styles.dropdownLink}`}> Explore Watch</a>
                                        </li>
                                        <li>
                                            <a href="/accessories" className={`${styles.navLink} ${styles.dropdownLink}`}>
                                                Accessories
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li className={styles.dropdownItem} onClick={async () => {
                            await router.push('/accessories');
                            setIsVisible(false);
                        }}>
                            <p className={`${styles.navLink} ${styles.dropdownButton}`}>Accessories</p>
                        </li>
                        <li className={styles.dropdownItem} onClick={async () => {
                            await router.push('/cellphones');
                            setIsVisible(false);
                        }}>
                            <p className={`${styles.navLink} ${styles.dropdownButton}`}>
                                Cellphones</p>
                        </li>
                        <li className={styles.dropdownItem} onClick={async () => {
                            await router.push('/contact');
                            setIsVisible(false);
                        }}>
                            <p className={`${styles.navLink} ${styles.dropdownButton}`} onClick={async () =>
                                await router.push('/contact')}>Contact</p>
                        </li>
                    </ul>


                </nav>)}
                <nav className={styles.pcNavContainer}>
                    <div className={styles.crossIcon} onClick={() => {
                        setIsVisible(!isVisible);
                    }}></div>

                    <ul className={styles.navList}>
                        <li className={styles.dropdownItem}>
                            <div className={`${styles.navLink} ${styles.dropdownButton}`} onClick={async () => {
                                await router.push('/store');
                                setIsVisible(false);
                            }}>
                                Stores <Image src={arrow} width={20} height={20} alt='arrow' className={styles.dropdownArrow} />
                            </div>
                            <div className={`${styles.dropdownContainer} ${styles.first}`}>
                                <div className={styles.dropdownGroup}>

                                    <span className={styles.dropdownTitle}>Shop</span>
                                    <ul className={styles.dropdownList}>
                                        <li>
                                            <Link href={'/store'} className={`${styles.navLink} ${styles.dropdownLink}`}>Shop The Latest</Link>
                                        </li>
                                        <li>
                                            <Link href={`/computer`} className={`${styles.navLink} ${styles.dropdownLink}`} >
                                                Computer & Tablet
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/cellphones`} className={`${styles.navLink} ${styles.dropdownLink}`}>
                                                Cellphone
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/accessories`} className={`${styles.navLink} ${styles.dropdownLink}`}>
                                                Accessories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/watch`} className={`${styles.navLink} ${styles.dropdownLink}`}>Wireview Watch</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.dropdownGroup}>
                                    <span className={styles.dropdownTitle}>Featured</span>
                                    <ul className={styles.dropdownList}>
                                        <li>
                                            <Link href={'/audiovideo'} className={`${styles.navLink} ${styles.dropdownLink}`}>Audio & Video</Link>

                                        </li>
                                        <li>
                                            <Link href={'/cellphones'} className={`${styles.navLink} ${styles.dropdownLink}`}
                                            >Cellphones & Accessories</Link>
                                        </li>
                                        <li>
                                            <Link href={`/watch`} className={`${styles.navLink} ${styles.dropdownLink}`}>Wireview Watch Premium</Link>

                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </li>
                        <li className={styles.dropdownItem}>
                            <div className={`${styles.navLink} ${styles.dropdownButton}`} onClick={async () => {
                                await router.push('/watch');
                                setIsVisible(false);
                            }}>
                                Watch <Image src={arrow} width={20} height={20} alt='arrow' className={styles.dropdownArrow} />
                            </div>
                            <div className={`${styles.dropdownContainer} ${styles.second}`}>
                                <div className={styles.dropdownGroup}>
                                    <ul className={styles.dropdownList}>
                                        <li>
                                            <a href="/watch" className={`${styles.navLink} ${styles.dropdownLink}`}> Explore Watch</a>
                                        </li>
                                        <li>
                                            <a href="/accessories" className={`${styles.navLink} ${styles.dropdownLink}`}>
                                                Accessories
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li className={styles.dropdownItem} onClick={async () => {
                            await router.push('/accessories');
                            setIsVisible(false);
                        }}>
                            <p className={`${styles.navLink} ${styles.dropdownButton}`}>Accessories</p>
                        </li>
                        <li className={styles.dropdownItem} onClick={async () => {
                            await router.push('/cellphones');
                            setIsVisible(false);
                        }}>
                            <p className={`${styles.navLink} ${styles.dropdownButton}`}>
                                Cellphones</p>
                        </li>
                        <li className={styles.dropdownItem} onClick={async () => {
                            await router.push('/contact');
                            setIsVisible(false);
                        }}>
                            <p className={`${styles.navLink} ${styles.dropdownButton}`}>Contact</p>
                        </li>
                    </ul>


                </nav>

            </header >


        </>
    )
}

export default Header;