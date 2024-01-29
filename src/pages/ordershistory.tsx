import React, { useEffect, useState } from 'react';
import styles from '../styles/OrdersHistory.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { Loading } from '@/components/Loading';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/atoms/user';


const OrdersHistory = () => {
    const user = useRecoilValue(userState);
    const [ordersHistory, setOrdersHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFulfilledActive, setFulfilledActive] = useState(false);
    const [isPendingActive, setPendingActive] = useState(false);
    const [isAllActive, setAllActive] = useState(false);
    const router = useRouter()

    useEffect(() => {
        const getOrdersHistory = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}//orderHistory`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const data = await response.json();
                setOrdersHistory(data);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
                console.log("Server error");
                setIsLoading(false);

            }
        }
        getOrdersHistory();
    }, [isFulfilledActive, isPendingActive, isAllActive]);




    if (isLoading) {
        return <Loading />
    }

    else {
        if (user.user) {

            if (!isLoading && ordersHistory.length == 0) {
                return (
                    <div className={styles.NoOrdersContainer}>
                        <h1 className={styles.NoOrder}>No orders Yet!</h1>
                        <Link href={'/'}>
                            <p>Purchase Now!</p>
                        </Link>
                    </div>
                )
            }
            else {

                return (
                    <div className={styles.dashboardParentContainer}>
                        <div className={styles.dashboardSidebar}>
                            <div onClick={() => {
                                router.push('/')
                            }}>Home</div>
                            <div onClick={() => {
                                router.push('/cart')
                            }}
                            >Cart</div>
                            <div className={isFulfilledActive ? `${styles.active}` : ''} onClick={() => {
                                setFulfilledActive(true)
                                setAllActive(false)
                                setPendingActive(false)
                            }}>Fulfilled Orders</div>
                            <div className={isPendingActive ? `${styles.active}` : ''} onClick={() => {
                                setPendingActive(true)
                                setAllActive(false)
                                setFulfilledActive(false)
                            }}>Pending Orders</div>
                            <div className={isAllActive ? `${styles.active}` : ''} onClick={() => {
                                setAllActive(true)
                                setFulfilledActive(false)
                                setPendingActive(false)
                            }}>All Orders</div>
                        </div>
                        <div className={styles.dashboardContent}>
                            <h1 className={styles.dashboardContentHeader}>Orders History</h1>
                            <div className={styles.dashboardContentOrdersContainer}>
                                {ordersHistory.filter((orderHistory) => {
                                    if (isFulfilledActive) {
                                        return orderHistory.status === 'fulfilled';
                                    } else if (isPendingActive) {
                                        return orderHistory.status === 'pending';
                                    } else {
                                        return true;
                                    }
                                }).map((orderHistory) => {
                                    return (
                                        < div className={styles.dashboardContentOrdersContainerOrder} key={orderHistory._id} >
                                            <h1>Order Id: #{orderHistory._id}</h1>

                                            <div className={styles.productDetailsContainer}>{orderHistory.products.map((product) => {
                                                return (
                                                    <div className={styles.productDetails}>
                                                        <Image className={styles.productImage} src={product.product.thumbnail} alt="product image" width={100} height={100} />
                                                        <p>{product.product.name}</p>
                                                        <p>{product.product.price}</p>
                                                        <p>Ordered Quantity: {product.quantity}</p>
                                                    </div>
                                                )
                                            })}</div>
                                            <p className={styles.totalPrice}>Total Price: ${orderHistory.totalPrice}</p>
                                            <p className={styles.status}>Status: {orderHistory.status}</p>

                                        </div>)
                                })}
                            </div>
                        </div>
                    </div >
                )
            }

        } else {
            return (
                <div className={styles.container}>
                <h1 className={styles.title}>Not authorised! Login to see your ordersHistory.</h1>
            </div>
            )
        }
    }
}

export default OrdersHistory;
