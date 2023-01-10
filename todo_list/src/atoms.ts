import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark", //key는 state의 이름을 넣는다
  default: false,
});
