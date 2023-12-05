import React from 'react'
import styles from '../styles/header.module.css'
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { userState } from '@/store/atoms/user';
import { useSetRecoilState } from 'recoil';
import LoginLogout from './LoginLogout';
import Cart from '../components/Cart';


const HeaderIconsContainer = () => {
    return (
        <div className={styles.headerIconsContainer}>
            <LoginLogout />
            <Cart />
        </div>
    )
}

export default HeaderIconsContainer

