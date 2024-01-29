import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Image } from 'next/dist/client/image-component';
import styles from '../../styles/dashboard.module.css'
import { CircularProgress } from '@mui/material';
import updateOrderStatus from '@/lib/utils/updateOrderStatus';
import { useSetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/atoms/user';
import { mounted } from '@/store/atoms/mounted';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();
    const user = useRecoilValue(userState);
    const isMounted = useRecoilValue(mounted);

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pendingOrders, setPendingOrders] = useState(false);
    const [fulfilledOrders, setFulfilledOrders] = useState(false);
    const [fulfilledCount, setFulfilledCount] = useState(0);
    const [pendingCount, setPendingCount] = useState(0);
    const [allOrders, setAllOrders] = useState(false);
    const [updating, setUpdating] = useState(false);
    const fetchOrders = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            });
            setOrders(res.data.orders);
            setFulfilledCount(res.data.orders.filter(order => order.status === 'fulfilled').length);
            setPendingCount(res.data.orders.filter(order => order.status === 'pending').length);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchOrders();
        setFulfilledCount(orders.filter(order => order.status === 'fulfilled').length);
        setPendingCount(orders.filter(order => order.status === 'pending').length);

    }, [updating]);



    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </div>
            </div>
        );
    } else {
        if (!user?.user.isAdmin) {
            return (
                <div className={styles.noAccess}>
                    <h2>Oops!</h2>
                    <p>This page does not exist!</p>
                </div>
            )
        }
    }



    if (fulfilledOrders) {
        //show only fulfilled orders
        return (
            <div className={styles.dashboardParentContainer}>
                <div className={styles.dashboardSidebar}>
                    <div
                        className={allOrders ? styles.active : ''}
                        onClick={() => {
                            setPendingOrders(false);
                            setFulfilledOrders(false);
                            setAllOrders(true)
                        }}
                    >
                        All Orders
                    </div>
                    <div
                        className={pendingOrders ? styles.active : ''}
                        onClick={() => {
                            setPendingOrders(true);
                            setFulfilledOrders(false);
                            setAllOrders(false)
                        }}
                    >
                        Pending Orders
                    </div>
                    <div
                        className={fulfilledOrders ? styles.active : ''}
                        onClick={() => {
                            setPendingOrders(false);
                            setFulfilledOrders(true);
                            setAllOrders(false)
                        }}
                    >
                        Fulfilled Orders
                    </div>
                    <div onClick={async () => {
                        await router.push('/addproduct')
                    }}>
                        Add New Product
                    </div>

                </div>

                <div className={styles.dashboardContent}>
                    <div className={styles.dashboardContentHeader}>
                        <h1>Dashboard</h1>
                        <p>From your dashboard you can view your recent orders, pending orders, fulfilled orders.</p>
                    </div>
                    <div className={styles.totalOrders}>
                        <h1>Total Orders: {orders.length}</h1>
                    </div>
                    <div className={styles.fulfilledOrders}>
                        <span className={styles.checkMarkIcon}>&#10003;</span>

                        <h1>Fulfilled Orders: {fulfilledCount}</h1>
                    </div>
                    <div className={styles.pendingOrders}>
                        <span className={styles.pendingIcon}>!</span>

                        <h1 >Pending Orders: {pendingCount}</h1>
                    </div>
                    {
                        fulfilledCount === 0 ? <h1 className={styles.fulfilledOrdersText}>No Fulfilled Orders</h1> :
                            < div className={styles.dashboardContentOrders}>
                                <h1>Fulfilled Orders</h1>
                                <div className={styles.dashboardContentOrdersContainer}>
                                    {loading ? <CircularProgress />
                                        : orders.filter(order => order.status === 'fulfilled').map(order => (
                                            <div className={styles.dashboardContentOrdersContainerOrder}>
                                                <h1> Order #{order._id}</h1>
                                                {order.products.map(product => (
                                                    <div className={styles.productDetails}>
                                                        <Image alt='product-thumbnail' src={product.product.thumbnail} width={100} height={100} />
                                                        <p> {product.product.name}</p>
                                                        <p> Quantity: {product.quantity}</p>
                                                        <p> Price: ${product.product.price}</p>
                                                    </div>
                                                ))}
                                                <p>Total: ${order.totalPrice}</p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                    }
                </div>
            </div >
        )
    }
    else if (pendingOrders) {
        //show only orders with pending status
        return (
            <div className={styles.dashboardParentContainer}>
                <div className={styles.dashboardSidebar}>
                    <div
                        className={allOrders ? styles.active : ''}
                        onClick={() => {
                            setPendingOrders(false);
                            setFulfilledOrders(false);
                            setAllOrders(true)
                        }}
                    >
                        All Orders
                    </div>
                    <div
                        className={pendingOrders ? styles.active : ''}
                        onClick={() => {
                            setPendingOrders(true);
                            setFulfilledOrders(false);
                            setAllOrders(false)
                        }}
                    >
                        Pending Orders
                    </div>
                    <div
                        className={fulfilledOrders ? styles.active : ''}
                        onClick={() => {
                            setPendingOrders(false);
                            setFulfilledOrders(true);
                            setAllOrders(false)
                        }}
                    >
                        Fulfilled Orders
                    </div>
                    <div onClick={async () => {
                        await router.push('/addproduct')
                    }}>
                        Add New Product
                    </div>

                </div>

                <div className={styles.dashboardContent}>
                    <div className={styles.dashboardContentHeader}>
                        <h1>Dashboard</h1>
                        <p>From your dashboard you can view your recent orders, pending orders, fulfilled orders.</p>
                    </div>
                    <div className={styles.totalOrders}>
                        <h1>Total Orders: {orders.length}</h1>
                    </div>

                    <div className={styles.fulfilledOrders}>
                        <span className={styles.checkMarkIcon}>&#10003;</span>


                        <h1>Fulfilled Orders: {fulfilledCount}</h1>
                    </div>
                    <div className={styles.pendingOrders}>
                        <span className={styles.pendingIcon}>!</span>

                        <h1 >Pending Orders: {pendingCount}</h1>
                    </div>
                    {pendingCount === 0 ? <h1 className={styles.pendingOrdersText}>No Pending Orders</h1> : <div className={styles.dashboardContentOrders}>
                        <h1>Pending Orders</h1>
                        <div className={styles.dashboardContentOrdersContainer}>
                            {loading ? <CircularProgress />
                                : orders.filter(order => order.status === 'pending').map(order => (
                                    <div className={styles.dashboardContentOrdersContainerOrder}>
                                        <h1> Order #{order._id}</h1>
                                        {order.products.map(product => (
                                            <div className={styles.productDetails}>
                                                <Image alt='product-thumbnail' src={product.product.thumbnail} width={100} height={100} />
                                                <p> {product.product.name}</p>
                                                <p> Quantity: {product.quantity}</p>
                                                <p> Price: ${product.product.price}</p>
                                            </div>
                                        ))}
                                        <p>Total: ${order.totalPrice}</p>
                                        {
                                            updating ? <CircularProgress /> : (
                                                <select value={order.status} onChange={(e) => {
                                                    updateOrderStatus(e.target.value, order._id, fetchOrders, setUpdating);
                                                }
                                                } className={styles.statusInput}>
                                                    <option value="pending">pending</option>
                                                    <option value="fulfilled">fulfilled</option>
                                                </select>
                                            )
                                        }
                                    </div>
                                ))}
                        </div>
                    </div>}



                </div>
            </div>)
    }
    else {
        if (orders.length === 0) {
            return (
                <div className={styles.noOrders}>No user has ordered Yet!</div>
            )
        }

        return (

            <div className={styles.dashboardParentContainer}>
                <div className={styles.dashboardSidebar}>
                    <div
                        className={allOrders ? styles.active : ''}
                        onClick={() => {
                            setPendingOrders(false);
                            setFulfilledOrders(false);
                            setAllOrders(true)
                        }}
                    >
                        All Orders
                    </div>
                    <div
                        className={pendingOrders ? styles.active : ''}
                        onClick={() => {
                            setPendingOrders(true);
                            setFulfilledOrders(false);
                            setAllOrders(false)
                        }}
                    >
                        Pending Orders
                    </div>
                    <div
                        className={fulfilledOrders ? styles.active : ''}
                        onClick={() => {
                            setPendingOrders(false);
                            setFulfilledOrders(true);
                            setAllOrders(false)
                        }}
                    >
                        Fulfilled Orders
                    </div>

                    <div onClick={async () => {
                        await router.push('/addproduct')
                    }}>
                        Add New Product
                    </div>

                </div>

                <div className={styles.dashboardContent}>
                    <div className={styles.dashboardContentHeader}>
                        <h1>Dashboard</h1>
                        <p>From your dashboard you can view your recent orders, pending orders, fulfilled orders.</p>
                    </div>
                    <div className={styles.totalOrders}>
                        <h1>Total Orders: {orders.length}</h1>
                    </div>
                    <div className={styles.fulfilledOrders}>
                        <span className={styles.checkMarkIcon}>&#10003;</span>

                        <h1>Fulfilled Orders: {orders.filter(order => order.status === 'fulfilled').length}</h1>
                    </div>
                    <div className={styles.pendingOrders}>
                        <span className={styles.pendingIcon}>!</span>

                        <h1 >Pending Orders: {orders.filter(order => order.status === 'pending').length}</h1>
                    </div>
                    <div className={styles.dashboardContentOrders}>
                        <h1>All Orders</h1>
                        <div className={styles.dashboardContentOrdersContainer}>
                            {loading ? <CircularProgress />
                                : orders.map(order => (
                                    <div className={styles.dashboardContentOrdersContainerOrder}>
                                        <h1> Order #{order._id}</h1>
                                        {order.products.map(product => (
                                            <div className={styles.productDetails}>
                                                <Image alt='product-thumbnail' src={product.product.thumbnail} width={100} height={100} />
                                                <p> {product.product.name}</p>
                                                <p> Quantity: {product.quantity}</p>
                                                <p> Price: ${product.product.price}</p>
                                            </div>
                                        ))}
                                        <p>Total: ${order.totalPrice}</p>

                                        {
                                            updating ? <CircularProgress />
                                                : (
                                                    <select value={order.status} onChange={(e) => {
                                                        updateOrderStatus(e.target.value, order._id, fetchOrders, setUpdating);
                                                    }
                                                    } className={styles.statusInput}>
                                                        <option value="pending">pending</option>
                                                        <option value="fulfilled">fulfilled</option>
                                                    </select>
                                                )
                                        }
                                    </div>
                                ))}
                        </div>
                    </div>


                </div>
            </div>)
    }






    // ... Rest of the code
}
export default Dashboard