import React from 'react'
import styles from '../styles/Footer.module.css'
import Logo from '../../public/header/logo2-removebg-preview.png'
import Image from "next/image"
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>

            <footer className={styles.footer}>
                <div className={styles.footerContainerTop}>
                    <div className={styles.footerTopBlock}>
                        <div className={styles.footerLogo}>
                            <Image src={Logo} alt="Wireview logo"
                                width={120}
                                height={100} />
                        </div>
                        <div className={styles.footerTopBlock}>

                            <h2 className={styles.footerHeading}>
                                Contact Info
                            </h2>
                            <div className={styles.footerLeftDetails}>
                                <ul>
                                    <li><svg className={styles.footerBlockStoreIcon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        <div className={styles.footerLeftBlockInformation}>
                                            Bahadur Shah Zafar Marg, New Delhi, Delhi 110002
                                        </div>
                                    </li>
                                    <li>
                                        <svg className={styles.footerBlockPhoneIcon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        <div className={styles.footerLeftBlockInformation}>
                                            Or call  +91 00 0000 0000
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footerTopBlock}>
                        <h2 className={styles.footerHeading}>
                            Company
                        </h2>
                        <ul>
                            <li><Link className={styles.link} href={'/about'}>About</Link></li>
                            <li><Link className={styles.link} href={'/privacy'}>Privacy Policy</Link></li>
                            <li><Link className={styles.link} href={'/termsandconditions'}>Terms & Conditions</Link></li>
                            <li><Link className={styles.link} href={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerTopBlock}>
                        <h2 className={styles.footerHeading}>
                            Find it Fast
                        </h2>
                        <ul>
                            <li><Link className={styles.link} href={'/computer'}>Computer & Tablet </Link></li>
                            <li><Link className={styles.link} href={'/cellphones'}>Cellphones & Accessories</Link></li>
                            <li><Link className={styles.link} href={'/audiovideo'}> Audio & Video</Link></li>
                            <li><Link className={styles.link} href={'/accessories'}>Accessories</Link></li>
                        </ul>
                    </div>

                </div>
                <hr />
                <div className={styles.footerContentmiddle}>
                    <div className={styles.footerMiddleContentContainer}>

                        <div className={styles.footerSocialLinksContainer}>
                            <ul className={styles.footerSocialLinks}>
                                <li>
                                    <a href="https://linkedin.com/in/hiteshmishra21"><svg class={`${styles.linkedinIcon} w-10 h-10 text-blue-700 `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                        <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                        <path d="M3 5.012H0V15h3V5.012Z" />
                                    </svg>
                                    </a></li>
                                {/* <li><a href=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-facebook" role="presentation">
                                    <path d="M6.02103 15.3333L6.00001 8.66663H3.33334V5.99996H6.00001V4.33329C6.00001 1.85903 7.53222 0.666626 9.73944 0.666626C10.7967 0.666626 11.7054 0.745339 11.9702 0.780526V3.36628L10.4394 3.36697C9.23898 3.36697 9.00655 3.93739 9.00655 4.77443V5.99996H12.5L11.1667 8.66663H9.00655V15.3333H6.02103Z" fill="currentColor"></path>
                                </svg></a></li>
                                <li><a href=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-pinterest">
                                    <path d="M8 0C3.6 0 0 3.6 0 8C0 11.4 2.13333 14.2667 5.06667 15.4667C5 14.8667 4.93333 13.8667 5.06667 13.2C5.2 12.6 6 9.2 6 9.2C6 9.2 5.8 8.66667 5.8 8C5.8 6.86667 6.46667 6.06667 7.26667 6.06667C7.93333 6.06667 8.26667 6.6 8.26667 7.2C8.26667 7.86667 7.8 8.93333 7.6 9.86667C7.4 10.6667 8 11.3333 8.8 11.3333C10.2 11.3333 11.3333 9.86667 11.3333 7.66667C11.3333 5.73333 9.93333 4.4 8 4.4C5.73333 4.4 4.4 6.13333 4.4 7.86667C4.4 8.53333 4.66667 9.26667 5 9.66667C5.06667 9.73333 5.06667 9.8 5.06667 9.86667C5 10.1333 4.86667 10.6667 4.86667 10.8C4.8 10.9333 4.73333 11 4.6 10.9333C3.6 10.4667 3 9 3 7.86667C3 5.33333 4.86667 3 8.26667 3C11.0667 3 13.2 5 13.2 7.6C13.2 10.3333 11.4667 12.6 9.06667 12.6C8.26667 12.6 7.46667 12.2 7.2 11.6667C7.2 11.6667 6.8 13.2 6.73333 13.6C6.53333 14.2667 6.06667 15.1333 5.73333 15.6667C6.4 15.8667 7.2 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z" fill="currentColor"></path>
                                </svg></a></li>
                                <li><a href=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-instagram">
                                    <path d="M7.99999 1.98796C9.95799 1.98796 10.19 1.99529 10.9633 2.03063C11.4282 2.03604 11.8888 2.12151 12.3247 2.28329C12.6433 2.4007 12.9315 2.5882 13.168 2.83196C13.4117 3.06842 13.5993 3.35663 13.7167 3.67529C13.8784 4.11119 13.9639 4.57171 13.9693 5.03663C14.0047 5.80996 14.012 6.04196 14.012 7.99996C14.012 9.95796 14.0047 10.19 13.9693 10.9633C13.9639 11.4282 13.8784 11.8887 13.7167 12.3246C13.5946 12.6409 13.4077 12.9282 13.168 13.1679C12.9282 13.4077 12.641 13.5946 12.3247 13.7166C11.8888 13.8784 11.4282 13.9639 10.9633 13.9693C10.19 14.0046 9.95799 14.012 7.99999 14.012C6.04199 14.012 5.80999 14.0046 5.03666 13.9693C4.57174 13.9639 4.11122 13.8784 3.67532 13.7166C3.35666 13.5992 3.06845 13.4117 2.83199 13.168C2.58823 12.9315 2.40073 12.6433 2.28332 12.3246C2.12154 11.8887 2.03607 11.4282 2.03066 10.9633C1.99532 10.19 1.98799 9.95796 1.98799 7.99996C1.98799 6.04196 1.99532 5.80996 2.03066 5.03663C2.03607 4.57171 2.12154 4.11119 2.28332 3.67529C2.40073 3.35663 2.58823 3.06842 2.83199 2.83196C3.06845 2.5882 3.35666 2.4007 3.67532 2.28329C4.11122 2.12151 4.57174 2.03604 5.03666 2.03063C5.80999 1.99529 6.04199 1.98796 7.99999 1.98796ZM7.99999 0.666626C6.00866 0.666626 5.75866 0.675293 4.97666 0.710626C4.36838 0.723197 3.76659 0.838371 3.19666 1.05129C2.70902 1.24007 2.26626 1.52875 1.8968 1.89879C1.52734 2.26882 1.23935 2.71203 1.05132 3.19996C0.838401 3.76989 0.723227 4.37168 0.710656 4.97996C0.675323 5.75863 0.666656 6.00863 0.666656 7.99996C0.666656 9.99129 0.675323 10.2413 0.710656 11.0233C0.723227 11.6316 0.838401 12.2334 1.05132 12.8033C1.2401 13.2909 1.52878 13.7337 1.89882 14.1032C2.26885 14.4726 2.71206 14.7606 3.19999 14.9486C3.76992 15.1615 4.37171 15.2767 4.97999 15.2893C5.75866 15.3246 6.00866 15.3333 7.99999 15.3333C9.99132 15.3333 10.2413 15.3246 11.0233 15.2893C11.6316 15.2767 12.2334 15.1615 12.8033 14.9486C13.291 14.7598 13.7337 14.4712 14.1032 14.1011C14.4726 13.7311 14.7606 13.2879 14.9487 12.8C15.1616 12.23 15.2768 11.6282 15.2893 11.02C15.3247 10.2413 15.3333 9.99129 15.3333 7.99996C15.3333 6.00863 15.3247 5.75863 15.2893 4.97663C15.2768 4.36835 15.1616 3.76656 14.9487 3.19663C14.7599 2.70899 14.4712 2.26623 14.1012 1.89677C13.7311 1.52731 13.2879 1.23932 12.8 1.05129C12.2301 0.838371 11.6283 0.723197 11.02 0.710626C10.2413 0.675293 9.99132 0.666626 7.99999 0.666626Z" fill="currentColor"></path>
                                    <path d="M7.99998 4.23401C7.25514 4.23401 6.52702 4.45488 5.9077 4.86869C5.28839 5.28251 4.80569 5.87068 4.52065 6.55882C4.23561 7.24697 4.16103 8.00419 4.30634 8.73472C4.45165 9.46525 4.81033 10.1363 5.33702 10.663C5.8637 11.1897 6.53474 11.5483 7.26527 11.6936C7.9958 11.839 8.75302 11.7644 9.44117 11.4793C10.1293 11.1943 10.7175 10.7116 11.1313 10.0923C11.5451 9.47297 11.766 8.74485 11.766 8.00001C11.766 7.0012 11.3692 6.04331 10.6629 5.33705C9.95668 4.63078 8.99879 4.23401 7.99998 4.23401V4.23401ZM7.99998 10.4447C7.51647 10.4447 7.04382 10.3013 6.6418 10.0327C6.23977 9.76405 5.92643 9.38225 5.7414 8.93554C5.55637 8.48884 5.50796 7.9973 5.60229 7.52308C5.69661 7.04886 5.92945 6.61326 6.27134 6.27137C6.61323 5.92948 7.04883 5.69664 7.52305 5.60232C7.99727 5.50799 8.48881 5.5564 8.93551 5.74143C9.38222 5.92646 9.76402 6.2398 10.0326 6.64182C10.3013 7.04385 10.4446 7.5165 10.4446 8.00001C10.4446 8.64837 10.1871 9.27019 9.72862 9.72865C9.27016 10.1871 8.64835 10.4447 7.99998 10.4447V10.4447Z" fill="currentColor"></path>
                                    <path d="M11.9147 4.96532C12.4007 4.96532 12.7947 4.57133 12.7947 4.08532C12.7947 3.59931 12.4007 3.20532 11.9147 3.20532C11.4287 3.20532 11.0347 3.59931 11.0347 4.08532C11.0347 4.57133 11.4287 4.96532 11.9147 4.96532Z" fill="currentColor"></path>
                                </svg></a></li>
                                <li><a href="">
                                </a>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-youtube">
                                        <path d="M15.9963 5.6389C16.0323 4.1584 15.8047 2.68898 15.3349 1.36707C15.0161 0.824662 14.5737 0.45862 14.0848 0.33273C12.0625 0.0715852 10.0317 -0.0354495 8.00136 0.0120845C5.97838 -0.037607 3.95498 0.0659739 1.93973 0.322387C1.54131 0.425528 1.17259 0.691484 0.878584 1.0878C0.224452 1.9463 0.15177 3.41507 0.0790889 4.65628C-0.026363 6.88794 -0.026363 9.12715 0.0790889 11.3588C0.100116 12.0574 0.173207 12.7509 0.297133 13.4275C0.384769 13.9499 0.562073 14.4332 0.813171 14.8342C1.10918 15.2515 1.48648 15.5326 1.89612 15.641C3.46307 15.9162 5.04193 16.0303 6.62041 15.9823C9.16426 16.034 11.3956 15.9823 14.0339 15.6927C14.4536 15.591 14.8415 15.3095 15.1459 14.8859C15.3494 14.5962 15.5014 14.2416 15.5893 13.8516C15.8492 12.7165 15.9769 11.5286 15.9672 10.3348C15.9963 9.75558 15.9963 6.25951 15.9963 5.6389ZM6.35876 10.9554V4.55284L10.6615 7.76965C9.45499 8.72124 7.86327 9.79696 6.35876 10.9554Z" fill="currentColor"></path>
                                    </svg>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

            </footer >
        </div >
    )
}

export default Footer