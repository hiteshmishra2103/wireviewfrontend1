import { selector } from "recoil";
import { userState } from "../atoms/user";

export const isLoadingState = selector({
    key: "isLoadingState",
    get: ({ get }) => {
        const state = get(userState);
        return state.isLoading;
    }
});
