import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import cart from '../../public/header/shopping-bag.png'
import styles from '../styles/header.module.css'
import { useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';
import cartQuantityState from '../store/atoms/cart';
import { userState } from '@/store/atoms/user';
import { useEffect } from 'react';
import axios from 'axios';


const Cart = () => {
    const router = useRouter()
    const cartQuantity = useRecoilValue(cartQuantityState);
    const setCartQuantity = useSetRecoilState(cartQuantityState);
    const user = useRecoilValue(userState);

    useEffect(() => {
        const fetchCartQuantity = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}//cartQuantity`, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },
                });
                if (response.data.cartQuantity) {
                    setCartQuantity(response.data.cartQuantity.totalQuantity);
                }
            } catch (e) {
                console.log("error");
            }
        };
        if (user) {
            fetchCartQuantity();
        }
    }, [user]);

    return (

        <div className={styles.cartContainer} onClick={() => {
            router.push('/cart')
        }}>
            <Image className={styles.cartIcon}
                src={cart}
                alt="Description of the image"
                width={40}
                height={41}
            />
            <p className={styles.quantity}>{cartQuantity}</p>
        </div>
    )
}


export default Cart;
