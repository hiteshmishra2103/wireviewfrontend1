
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import styles from '../styles/Cart.module.css'
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { loadStripe } from "@stripe/stripe-js";
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/atoms/user';
import { Loading } from '@/components/Loading';


// import { serverError } from 'next/navigation';

// async function fetchUser(id) {
//     const res = await fetch(`https://.../users/${id}`);
//     if (!res.ok) return undefined;
//     return res.json();
// }

// export default async function UserProfile({ params }) {
//     const user = await fetchUser(params.id);

//     if (!user) {
//         serverError();
//     }

//     // ...
// }


const cart = () => {
    const router = useRouter()
    const user = useRecoilValue(userState);
    const [isMounted, setIsMounted] = useState(false);
    const [cart, setCart] = useState([]);
    let response;
    const makePayment = async () => {

        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

            const products = cart.products.map(product => ({
                name: product.product.name,
                price: product.product.price,
                quantity: product.quantity,
                productId: product.product._id,
            }));
            const body = { product: products };

            response = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/create-checkout-session`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    body: JSON.stringify(body),
                }
            );

            const session = await response.json();

            const result = await stripe.redirectToCheckout({
                sessionId: session.session.id,
            });


        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        fetchCart();
    })
    const fetchCart = async () => {
        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cart`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            });

            const data = await res.json();
            setCart(data.cart);
            setIsMounted(true);
        } catch (error) {
            console.log(error)
            setIsMounted(true);
        }
    }


    if (!isMounted) {
        return <Loading />
    }
    else {

        if (user.user) {
            if (cart?.products?.length === 0) {
                return (
                    <div className={styles.emptyCart}>
                        <h1>Cart is empty!</h1>
                    </div>
                )
            }
            else {
                return (
                    <div className={styles.cartDetailsParentContainer}>
                        <h2 className={styles.heading}>Your Cart</h2>
                        <div className={styles.cartDetailsContainer}>
                            <div className={styles.productsContainer}>
                                <div className={styles.cartProductHeading}>
                                    <p>Product</p>
                                    <p>Quantity</p>
                                    <p>Total</p>
                                    <p>Remove</p>
                                </div>

                                <hr className={styles.horizontalLine} />

                                {cart?.products?.map((product) => (

                                    < div className={styles.cartProductCard} >
                                        <div className={styles.productThumbnailContainer}>
                                            <Image className={styles.productThumbnail}
                                                src={product.product.thumbnail}
                                                alt="product image"
                                                width={100}
                                                height={100}
                                            />
                                            <Link href={`/product/${product.product._id}`}>

                                                <p>{product.product.name}</p>
                                                <p className={styles.productPrice}>${product.product.price}</p>
                                            </Link>

                                        </div>
                                        <div className={styles.productQuantity}>{product.quantity}</div>
                                        <div className={styles.productTotal}>
                                            ${product.quantity * product.product.price}
                                        </div>
                                        <div className={styles.productRemove}>
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAO5JREFUWEftl8ENwyAMRZ83aTbpKpmk7STNJs0mzSZEKKoaBRLHiAOtzBVbfnxsjIXGljTGw38ABXgBV0XdSaCz3oBZoZMwH45BoLdAmYAC3IGbJQDwkMXv1EqACoOeCpYxSmAdaKOSrlCp9rX8DpM6LKWtlbeVZRQY95w0oJKq0gAPq86BtHfp9xUSvg05QMgljGJTN4ccaH0Fub7mCrlCmzI1v0OeQ55DnkNpv6vby+L3YaXy3kh0ZFMdSPsRavvNAfUCQ+mf+gK8tSMb9zuBqQgoOgWIUM8K00eEiOrsThwxnmm2NypRZO5Ammwz8j2OJWbP2wcAAAAASUVORK5CYII="
                                                className={styles.removeFromCartButton}
                                                onClick={async () => {
                                                    try {
                                                        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}//deleteFromCart/${product.product._id}`, {
                                                            method: 'DELETE',
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                                                            },
                                                        });
                                                        if (!response.ok) {
                                                            throw new Error(`HTTP error! status: ${response.status}`);
                                                        }
                                                        const data = await response.json();

                                                        fetchCart();

                                                    } catch (error) {
                                                        console.error('Error:', error);
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.cartTotals}>
                                {/* <div className={styles.}> */}
                                <div>
                                    <span>Cart Total: </span> <span>${cart?.totalPrice}</span>
                                </div>
                                {/* </div> */}
                                <button className={styles.btn} onClick={() => {
                                    makePayment();
                                }}>
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div >
                )
            }
        } else {
            return (
                <div className={styles.container}>
                    <h1 className={styles.title}>Not authorised! Login to see your cart.</h1>
                </div>
            )
        }
    }
};

export default cart