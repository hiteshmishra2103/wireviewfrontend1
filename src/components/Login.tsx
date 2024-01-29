import React, { useState } from 'react'
import formStyles from '../styles/signup.module.css'
import { SigninToSignupModal, signupToSigninModal, openSigninModal, openSignupModal } from '@/lib/utils/modal';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { validateHeaderName } from 'http';
import { set } from 'mongoose';

import { useSetRecoilState } from 'recoil';
import { userState } from '@/store/atoms/user';
import { useEffect } from 'react';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [existserror, setExistsError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [adminLoginUrl, setAdminLoginUrl] = useState(false);
    const setUser = useSetRecoilState(userState);


    // useEffect(() => {
    //     if (username && password) {
    //         setUser({ user: username });
    //     } else {
    //         setUser(null);
    //     }
    // }, [username, password]);

    return (
        <div>
            <div className={formStyles.login}>

                <div className={formStyles.center}>
                    <div className={formStyles.closeBtn} onClick={() => openSigninModal()}>
                        &times;
                    </div>
                    {adminLoginUrl ? <h6>Admin Log in</h6> : < h6 > User Log in</h6>}
                    <div className={formStyles.formContainer}>
                        <div className={formStyles.textField}>
                            <input type="text" onChange={(e) => { setUsername(e.target.value) }} name="username" className={`${formStyles.usernameInput}`} value={username} required />
                            <span></span>
                            <label className={formStyles.usernameLabel} >Username</label>
                        </div>
                        <br />
                        <div className={formStyles.textField}>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} className={`${formStyles.passwordInput}`} name="password" value={password} required />
                            <span></span>
                            <label className={formStyles.passwordLabel}>Password</label>
                        </div>
                        <br />
                        {existserror && <div className={formStyles.requiredFields}>
                            <p>Invalid username or password!</p>
                        </div>}

                        <div className={formStyles.signupBtnContainer}>
                            {adminLoginUrl ? <button onClick={async () => {
                                try {
                                    if (!username || !password) {
                                        setExistsError(true);
                                        const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                                        fill.classList.remove(`${formStyles.hide}`);
                                    };
                                    console.log(username);
                                    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}//admin/login`, {
                                        username, password
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
                                        fill?.classList.add(`${formStyles.hide}`);
                                        if (adminLoginUrl) {
                                            await router.push(`/dashboard/${username}`);
                                            router.reload();
                                        }
                                        else {
                                            await router.push(`/ordershistory`);
                                        }
                                    }

                                    // router.push(`${username}/orders`);
                                } catch (error) {
                                    console.error('Error:', error);
                                    if (error.response && error.response.status == 403) {
                                        setExistsError(true);
                                        const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                                        fill?.classList.remove(`${formStyles.hide}`);

                                    } else {
                                        console.error(error)
                                    }
                                }
                            }}

                                className={formStyles.btn}>Log in</button> :
                                <button onClick={async () => {
                                    try {
                                        if (!username || !password) {
                                            setExistsError(true);
                                            const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                                            fill.classList.remove(`${formStyles.hide}`);
                                        };
                                        console.log(username, password);
                                        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}//login`, {
                                            username, password
                                        }, {
                                            headers: {
                                                "Content-type": "application/json"
                                            }
                                        });
                                        const data = res.data;
                                        localStorage.setItem("token", data.token);
                                        if (res.status === 200) {
                                            setLoggedIn(true);
                                            setUser({
                                                user: username,
                                                isLoading: false
                                            })
                                            const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                                            fill?.classList.add(`${formStyles.hide}`);
                                            if (adminLoginUrl) {
                                                router.push(`/dashboard/${username}`);
                                                setAdminLoginUrl(false);
                                            }
                                            else {
                                                router.push(`/ordershistory`);
                                            }
                                        }

                                        // router.push(`${username}/orders`);
                                    } catch (error) {
                                        console.error('Error:', error);
                                        if (error.response && error.response.status == 403) {
                                            console.log(error.response.data);
                                            setExistsError(true);
                                            const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                                            fill?.classList.remove(`${formStyles.hide}`);

                                        } else {
                                            // The request was made but no response was received
                                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                                            // http.ClientRequest in node.js
                                            console.error(error)
                                        }
                                    }
                                }}
                                    className={formStyles.btn}>Log in</button>}
                        </div>
                        <div className={formStyles.signinLinkContainer} >New User? <p onClick={() => SigninToSignupModal()} className={formStyles.signinLink} >Sign Up</p></div>
                        <div className={formStyles.signinLinkContainer} >{adminLoginUrl ? <p className={formStyles.signinLink} onClick={() => {
                            setUsername('');
                            setPassword('');
                            setAdminLoginUrl(false);
                        }
                        } >Log in as User</p> : <p className={formStyles.signinLink} onClick={() => {
                            // setUsername('');
                            // setPassword('');
                            setAdminLoginUrl(true)
                        }
                        } >Log in as Admin</p>}</div>
                    </div>
                </div >
            </div >
        </div>

    )
}

export default Login

