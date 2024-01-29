import React, { useState } from 'react'
import { SigninToSignupModal, signupToSigninModal, openSigninModal, openSignupModal } from '@/lib/utils/modal';
import formStyles from '../styles/signup.module.css'
import Router, { useRouter } from 'next/router';

import axios from 'axios';
import { set } from 'mongoose';


const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [accountCreated, setAccountCreated] = useState(false);
    const [existserror, setExistsError] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [notFilled, setNotFilled] = useState(false);



    const router = useRouter();
    return (
        <div className={formStyles.signup}>
            <div className={formStyles.center}>
                <div className={formStyles.closeBtn} onClick={() => openSignupModal()}>
                    &times;
                </div>
                <h6>Sign up</h6>
                <div className={formStyles.formContainer}>
                    <div className={formStyles.textField}>
                        <input onChange={(e) => { setUsername(e.target.value) }} type="text" id="username" name="username" className={`${formStyles.usernameInput}`} value={username} required />
                        <span></span>
                        <label htmlFor="username" className={formStyles.usernameLabel}>Username</label>
                    </div>
                    <br />
                    <div className={formStyles.fullName}>
                        <div className={formStyles.textField}>
                            <input type="text" name="firstName" className={`${formStyles.usernameInput}`}
                                onChange={
                                    (e) => {
                                        setFirstName(e.target.value);
                                    }
                                }
                                required value={firstName} />
                            <span></span>
                            <label className={formStyles.usernameLabel}>First name</label>
                        </div>
                        <br />
                        <div className={formStyles.textField}>
                            <input type="text" name="lastName" className={` ${formStyles.usernameInput}`}

                                onChange={
                                    (e) => {
                                        setLastName(e.target.value);
                                    }
                                }
                                value={lastName} />
                            <span></span>
                            <label className={`${formStyles.usernameLabel}`}>Last name(optional)</label>
                        </div>
                        <br />
                    </div>

                    <div className={formStyles.textField}>
                        <input type="text" name="email" className={`${formStyles.usernameInput}`} required
                            onChange={
                                (e) => {
                                    setEmail(e.target.value);
                                }
                            }
                            value={email} />
                        <span></span>
                        <label className={formStyles.usernameLabel}>Email</label>

                    </div>
                    <br />

                    <div className={formStyles.textField}>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" className={`${formStyles.passwordInput} `} name="password" value={password} required />
                        <span></span>
                        <label className={formStyles.passwordLabel}>Password</label>
                    </div>
                    <br />
                    {notFilled && <div className={formStyles.requiredFields}>
                        <p>Fill required fields!</p>
                    </div>}
                    {existserror && <div className={formStyles.error}>
                        <p>  User already exists</p>
                    </div>}
                    {accountCreated && <div className={formStyles.accountCreated}>
                        <p>Account Created successfully!</p>
                    </div>}
                    <div className={formStyles.signupBtnContainer}>
                        <button type='submit' className={formStyles.btn} onClick={async (e) => {
                            e.preventDefault();
                            try {
                                if (!username || !password || !email || !firstName) {
                                    setNotFilled(true);
                                    const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                                    fill.classList.remove(`${formStyles.hide}`)
                                    return;
                                }

                                const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}//signup`, {
                                    username: username,
                                    password: password
                                }, {
                                    headers: {
                                        "Content-type": "application/json"
                                    }
                                });
                                const data = res.data;
                                localStorage.setItem("token", data.token);
                                if (res.status == 200) {
                                    setAccountCreated(true);
                                    const error = document.querySelector(`.${formStyles.error}`) as HTMLElement;
                                    error?.classList.add(`${formStyles.hide}`);
                                    const fill = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
                                    fill?.classList.add(`${formStyles.hide}`);

                                    setTimeout(() => {
                                        const accountCreated = document.querySelector(`.${formStyles.accountCreated}`) as HTMLElement;
                                        accountCreated.classList.add(`${formStyles.hide}`);
                                        setEmail("");
                                        setUsername("");
                                        setPassword("");
                                        setFirstName("");
                                        setLastName("");
                                        openSignupModal();
                                        openSigninModal();

                                    }, 500);

                                }
                                // router.push(`${username}/orders`);
                            } catch (error) {
                                console.error('Error:', error);
                                if (error.response) {
                                    if (error.response && error.response.status == '403') {
                                        setExistsError(true);
                                    }

                                }
                            }
                        }}>Sign up</button>
                    </div>
                    <div className={formStyles.signinLinkContainer} >Already a user! <p className={formStyles.signinLink} onClick={() => signupToSigninModal()}>Signin</p></div>
                </div>
            </div >
        </div >
    )
}

export default Signup

