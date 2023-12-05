import React from 'react'
import Login from './Login';
import Signup from './Signup';
import styles from '../styles/header.module.css'
import { useRecoilValue } from 'recoil';
import formStyles from '../styles/signup.module.css'
import { openSigninModal, openSignupModal } from '@/lib/utils/modal';
import { useRouter } from 'next/router';
import { userState } from '@/store/atoms/user';
import { useSetRecoilState } from 'recoil';
import { mounted as mountedAtom } from '@/store/atoms/mounted';
import { CircularProgress } from '@mui/material';

const LoginLogout = () => {

    const router = useRouter();
    const setUser = useSetRecoilState(userState);
    const user = useRecoilValue(userState);
    const isMounted = useRecoilValue(mountedAtom);

    if (!isMounted) {
        return <CircularProgress />
    }
    else {
        return (
            <>
                {user.user ? (
                    <button className={`${styles.btn} ${styles.loginBtn}`} onClick={() => {
                        localStorage.setItem("token", null);
                        setUser({
                            user: '',
                            isLoading: true,
                        });
                        router.push('/');
                    }}>Logout</button>
                ) : (
                    <>
                        <button className={`${styles.btn} ${styles.loginBtn}`} onClick={() => openSigninModal()}>Login</button>
                        <Login />
                        <button className={`${styles.btn} ${formStyles.openSignupModal} ${styles.signupBtn}`} onClick={() => openSignupModal()}>Sign up</button>
                        <Signup />
                    </>
                )}
            </>
        );
    }
};

export default LoginLogout
