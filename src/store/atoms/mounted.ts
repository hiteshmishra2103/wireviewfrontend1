import { atom } from "recoil";


export const mounted = atom<boolean | null>({
    key: "isMounted",
    default: false,
});

