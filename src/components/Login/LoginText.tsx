import { useRecoilValue } from 'recoil';
import { userState } from '../../store/atoms/user';
import React from 'react';

const LoginText = () => {
    const user = useRecoilValue(userState);

    return (
        <div>
            {user ? (
                Logout
            ) : (
                Login
            )}
        </div>
    );
};

export default LoginText;
