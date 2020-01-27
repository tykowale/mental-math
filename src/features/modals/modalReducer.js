import { createReducer } from "../../app/common/utils/createReducer";
import { MODAL_CLOSE, MODAL_OPEN } from "./modalConstants";

const initialState = null;

const openModal = (state, { modalType, modalProps }) => ({
  modalType,
  modalProps
});

const closeModal = (state, payload) => null;

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
