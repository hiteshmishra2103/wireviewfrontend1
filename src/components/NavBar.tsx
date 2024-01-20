
import React from 'react';
import styles from '../styles/Navbar.module.css';

const NavBar = () => {
  return (
    <nav className={`${styles.nav} ${styles.container}`}>
      <div className={styles.nav__data}>
        <div className={`${styles.nav__toggle}`} id="nav-toggle">
          <i className={`ri-menu-line ${styles.nav__toggle_menu}`}></i>
          <i className={`ri-close-line ${styles.nav__toggle_close}`}></i>
        </div>
      </div>

      <div className={styles.nav__menu} id="nav-menu">
        <ul className={styles.nav__list}>
          <li className={`${styles.dropdown__item}`}>
            <div className={`${styles.nav__link} ${styles.dropdown__button}`}>
              Stores <i className={`ri-arrow-down-s-line ${styles.dropdown__arrow}`}></i>
            </div>
            <div className={styles.dropdown__container}>
              <div className={`${styles.dropdown__content} ${styles.first__content}`}>
                <div className={styles.dropdown__group}>
                  <span className={styles.dropdown__title}>Shop</span>
                  <ul className={styles.dropdown__list}>
                    <li>
                      <a href="" className={styles.dropdown__link}>Shop The Latest</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Computer & Tablet</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Cellphone</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Accessories</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Wireview Watch</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.dropdown__group}>
                  <span className={styles.dropdown__title}>Featured</span>
                  <ul className={styles.dropdown__list}>
                    <li>
                      <a href="" className={styles.dropdown__link}>Audio & Video</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>
                        Cameras, Camcorders</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}
                      >Cellphones & Accessories</a                    >
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}
                      >Woostock Watch Premium
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.dropdown__group}>
                  <span className={styles.dropdown__title}>Bestseller</span>
                  <ul className={styles.dropdown__list}>
                    <li>
                      <a href="" className={styles.dropdown__link}>Laptops</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}> Gaming Laptops</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Gaming Desktops </a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Watch </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={`${styles.dropdown__item}`}>
            <div className={`${styles.nav__link} ${styles.dropdown__button}`}>
              Watch <i className={`ri-arrow-down-s-line ${styles.dropdown__arrow}`}></i>
            </div>
            <div className={styles.dropdown__container}>
              <div className={styles.dropdown__content}>
                <div className={styles.dropdown__group}>
                  <ul className={styles.dropdown__list}>
                    <li>
                      <a href="" className={styles.dropdown__link}>Explore Watch</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Watch Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.dropdown__item}>
            <div className={`${styles.nav__link} ${styles.dropdown__button}`}>
              Cellphones <i className={`ri-arrow-down-s-line ${styles.dropdown__arrow}`}></i>
            </div>
            <div className={styles.dropdown__container}>
              <div className={styles.dropdown__content}>
                <div className={styles.dropdown__group}>
                  <ul className={styles.dropdown__list}>
                    <li>
                      <a href="" className={styles.dropdown__link}>Pinnacle</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>LuxeLine</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>EchoEar</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>TerraTech</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.dropdown__item}>
            <div className={`${styles.nav__link} ${styles.dropdown__button}`}>
              Accessories <i className={`ri-arrow-down-s-line ${styles.dropdown__arrow}`}></i>
            </div>
            <div className={styles.dropdown__container}>
              <div className={styles.dropdown__content}>
                <div className={styles.dropdown__group}>
                  <ul className={styles.dropdown__list}>
                    <li>
                      <a href="" className={styles.dropdown__link}>Best Audio</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}
                      >Bluetooth version max</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Latest Version </a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Max Version</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="" className={styles.nav__link}>Laptops</a>
          </li>
          <li className={styles.dropdown__item}>
            <div className={`${styles.nav__link} ${styles.dropdown__button}`}>
              Support <i className={`ri-arrow-down-s-line ${styles.dropdown__arrow}`}></i>
            </div>
            <div className={styles.dropdown__container}>
              <div className={styles.dropdown__content}>
                <div className={styles.dropdown__group}>
                  <ul className={styles.dropdown__list}>
                    <li>
                      <a href="" className={styles.dropdown__link}>Check Coverage</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}>Contact Us</a>
                    </li>
                    <li>
                      <a href="" className={styles.dropdown__link}
                      >Shipping & Delivery</a                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
