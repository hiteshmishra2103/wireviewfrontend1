import React from 'react'
import formStyles from '../styles/signup.module.css'
import { SigninToSignupModal, signupToSigninModal, openSigninModal, openSignupModal } from '@/lib/utils/modal';
import axios from 'axios';
import Router, { useRouter } from 'next/router';

const LoginBtn = () => {
    const router = useRouter();
    return (
        <button onClick={async () => {
            try {
                if (!username || !password) {
                    setExistsError(true);
                    const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                    fill.classList.remove(`${formStyles.hide}`);
                };
                const res = await axios.post(`${loginUrl}`, {
                    username: username,
                    password: password
                }, {
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                const data = res.data;
                localStorage.setItem("token", data.token);
                if (res.status === 200) {
                    setLoggedIn(true);
                    const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                    fill.classList.add(`${formStyles.hide}`);
                    if (loginUrl === `${process.env.NEXT_PUBLIC_SERVER_URL}/login`) {

                        router.push(`${username}/orders`);
                    }
                    else {
                        router.push(`${username}/admin`);
                    }
                }

                // router.push(`${username}/orders`);
            } catch (error) {
                console.error('Error:', error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            }
        }}

            className={formStyles.btn}>Log in</button>
    )
}

export default LoginBtn