import { useContext } from "react";
import {ModalContext} from "../providers/ModalProvider";

export const useModal = () => {
  const { showModal, hideModal, hideAllModals } = useContext(ModalContext);
  return { showModal, hideModal, hideAllModals };
};

export const useModalContext = () => useContext(ModalContext);