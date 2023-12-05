import { atom } from "recoil";

export const userState = atom<{ user: string, isLoading: boolean } | null>({
  key: "userState",
  default: {
    user: "",
    isLoading: true
  },
});
