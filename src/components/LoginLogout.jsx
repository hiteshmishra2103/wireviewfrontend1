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

        if (!user.user) {
            return (
                <>
                    <button className={`${styles.btn} ${styles.loginBtn}`} onClick={() => openSigninModal()}>Login</button>
                    <Login />
                    <button className={`${styles.btn} ${formStyles.openSignupModal} ${styles.signupBtn}`} onClick={() => openSignupModal()}>Sign up</button>
                    <Signup />
                </>
            )
        } else {

            return (
                <>
                    {user.user.isAdmin ? <>

                        <button className={`${styles.btn} ${styles.loginBtn} pcLogout`} onClick={() => {
                            try {

                                localStorage.setItem("token", null);
                                setUser({
                                    user: '',
                                    isLoading: true,
                                });


                                router.push('/');
                            } catch (err) {
                                console.log(err);
                            }

                        }}>Logout</button>

                        <div className='mobileLogout'>

                            <svg className="h-6 w-6  flex items-center cursor-pointer text-blue-700 hover:fill-transparent hover:text-blue-600 transition duration-300 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"
                                onClick={() => {
                                    try {

                                        localStorage.setItem("token", null);
                                        setUser({
                                            user: '',
                                            isLoading: true,
                                        });


                                        router.push('/');
                                    } catch (err) {
                                        console.log(err);
                                    }

                                }}>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                            </svg>
                        </div>
                        <button
                            onClick={() => {
                                try {
                                    router.push(`/dashboard/${user.user.username}`);

                                } catch (err) {
                                    console.log(err);
                                }
                            }}
                            type="button"
                            class="border-none  cursor-pointer relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-full"
                        >


                            <svg
                                xmlns="http://www.w3.org/2000/svg"

                                viewBox="0 0 24 24"
                                className="h-10 w-10 fill-current  text-blue-700 hover:stroke-current hover:fill-transparent hover:text-blue-600 transition duration-300 ease-in-out"
                            >
                                <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
                            </svg>



                        </button>

                    </> : <button className={`${styles.btn} ${styles.loginBtn}`} onClick={() => {
                        try {

                            localStorage.setItem("token", null);
                            setUser({
                                user: '',
                                isLoading: true,
                            });


                            router.push('/');
                        } catch (err) {
                            console.log(err);
                        }
                    }}>Logout</button>

                    }
                </>
            );

        }

    }
};

export default LoginLogout



