import formStyles from '../../styles/signup.module.css'


//under the formContainer class empty the value of all input fields
export const clearInputFields = () => {
    const inputFields = document.querySelectorAll(`.${formStyles.formContainer} input`) as NodeListOf<HTMLInputElement>;
    inputFields.forEach(input => input.value = '');
}

const addHideClass = () => {
    const accountCreated = document.querySelector(`.${formStyles.accountCreated}`) as HTMLElement;
    accountCreated?.classList.add(`${formStyles.hide}`);
    const error = document.querySelector(`.${formStyles.error}`) as HTMLElement;
    error?.classList.add(`${formStyles.hide}`);
    const requiredFields = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
    requiredFields?.classList.add(`${formStyles.hide}`);
}


export const openSignupModal = () => {
    const signupModal = document.querySelector(`.${formStyles.signup}`);
    signupModal.classList.toggle(`${formStyles.open}`);
    addHideClass();
    clearInputFields();
}

export const openSigninModal = () => {
    const signinModal = document.querySelector(`.${formStyles.login}`);
    signinModal.classList.toggle(`${formStyles.loginOpen}`);
    const requiredFields = document.querySelector(`.${formStyles.requiredFields}`) as HTMLElement;
    //add the hide class only if the hide class is not already added
    if (!requiredFields?.classList.contains(`${formStyles.hide}`)) {
        requiredFields?.classList.add(`${formStyles.hide}`);
    }
    clearInputFields();
    addHideClass();
}

export const SigninToSignupModal = () => {
    const signinModal = document.querySelector(`.${formStyles.login}`);
    const signupModal = document.querySelector(`.${formStyles.signup}`);
    signinModal.classList.toggle(`${formStyles.loginOpen}`);
    signupModal.classList.toggle(`${formStyles.open}`);
    clearInputFields();
}

export const signupToSigninModal = () => {
    const signinModal = document.querySelector(`.${formStyles.login}`);
    const signupModal = document.querySelector(`.${formStyles.signup}`);
    signinModal.classList.toggle(`${formStyles.loginOpen}`);
    signupModal.classList.toggle(`${formStyles.open}`);
    clearInputFields();
    addHideClass();
}