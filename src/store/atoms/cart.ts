import { atom } from 'recoil';


const cartQuantityState = atom<number>({
    key: 'cartQuantityState',
    default: 0,
});

export default cartQuantityState;
