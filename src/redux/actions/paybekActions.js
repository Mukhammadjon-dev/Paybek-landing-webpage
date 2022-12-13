import { dispatch } from "../store"
import { CLOSE_MODAL, OPEN_MODAL } from "../types"

export const openModal = (state) => {
    dispatch({ type: OPEN_MODAL, payload: state })
}

export const closeModal = (state) => {
    dispatch({ type: CLOSE_MODAL, payload: state })
}