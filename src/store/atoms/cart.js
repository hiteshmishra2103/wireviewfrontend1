import { atom } from 'recoil';


const cartQuantityState = atom({
    key: 'cartQuantityState',
    default: 0,
});

export default cartQuantityState;
