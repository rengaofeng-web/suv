import reducer from "./reducers";
import { createStore } from "redux";
import { Language, Theme } from "src/config/enum";
export function makeStore() {
  return createStore(reducer, {
    theme: Theme.Light,
    lang: Language.CN,
    isMobile: false,
    isConnect: false,
    showWallet: false,
  });
}
