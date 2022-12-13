import { detect } from "detect-browser";

import { CLOSE_MODAL, OPEN_MODAL } from "../types";

const detectNow = detect();
const versionDetect =  detectNow.version.split('.')[0] < 14
const safari = detectNow.name;
const isSafariIos = (safari === "ios");

const BrowserName = (isSafariIos && versionDetect);



const initialState = {
    isOpenModal: false,
    BrowserDetect: BrowserName,
};

console.log(initialState.BrowserDetect, "Browser Detect");

const paybekReducers = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpenModal: true,
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isOpenModal: false,
            }
        default:
            return state;
    }
}
export default paybekReducers;