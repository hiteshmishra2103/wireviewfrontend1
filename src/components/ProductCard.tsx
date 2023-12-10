import React from 'react'
import Image from 'next/image'
import styles from '../styles/ProductCard.module.css'
import Button from './Button'
import eye from '../../public/ProductCardSlider/eye-line.svg'
import Link from 'next/dist/client/link'
import { useSetRecoilState } from 'recoil';
import cartQuantityState from '../store/atoms/cart';
import { useRouter } from 'next/router'
import { useState } from 'react';
import addToCartFn from '@/lib/utils/addToCart'

const ProductCard = ({ imgUrl, name, price, id }) => {
    const setCartQuantity = useSetRecoilState(cartQuantityState);
    const [addToCart, setAddToCart] = useState(false)
    const router = useRouter();
    const quantity = 1;
    return (
        <>
            {
                addToCart && <div class="notification">
                    ✅ Added to Cart </div>
            }
            <div className={styles.productCardContainer}>

                <div className={styles.imageContainer} onClick={() => {
                    router.push(`/product/${id}`)
                }}>
                    <Image src={imgUrl} className={styles.Img} width={100} height={100} />
                </div>

                <div className={styles.quickViewContainer}>
                    <svg
                        onClick={() => {
                            addToCartFn(id, price, setCartQuantity, setAddToCart, quantity)
                        }}
                        className={styles.quickView}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}
                    >
                        <circle cx="10.5" cy="19.5" r="1.5"></circle>
                        <circle cx="17.5" cy="19.5" r="1.5"></circle>
                        <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
                        <path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path>
                    </svg>

                </div>

                <div className={styles.cardInfo} onClick={() => {
                    router.push(`/product/${id}`)
                }}>
                    <div className={styles.vendor}>
                        <p>
                            Wireview Electronics</p>
                    </div>
                    <Link href={`/product/${id}`}>
                        <h2 className={styles.productName}>
                            {name}
                        </h2>
                    </Link>
                    <div className={styles.productPrice}>
                        <p>From </p>
                        ${price}
                    </div>
                </div>


                <div className={styles.addToCartCompare}>
                    <div className={styles.addToCartIcon} onClick={
                        () => {
                            addToCartFn(id, price, setCartQuantity, setAddToCart, quantity)
                        }
                    }>

                        <Button text="Add to Cart" >
                            Add to cart
                        </Button>


                    </div>
                    {/* <div className={styles.compareIconContainer}>

<Image src={compareicon} className={styles.compareIcon} />
</div> */}
                </div>
            </div >

        </>
    )
}

export default ProductCard