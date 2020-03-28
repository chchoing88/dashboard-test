import React, { createContext, Dispatch, useReducer, useContext } from "react";
import { ModalType } from "types";

type ModalContextProviderProps = {
  children: React.ReactNode;
};
export type ModalState = { isModalOpen: boolean; modalType: ModalType };
type Action =
  | { type: "OPEN"; modalType: ModalType }
  | { type: "CLOSE"; modalType: ModalType };
type ModalDispatch = Dispatch<Action>;

const ModalStateContext = createContext<ModalState>({
  isModalOpen: false,
  modalType: "DEFAULT"
});

const ModalDispatchContext = createContext<ModalDispatch | undefined>(
  undefined
);

function modalReducer(state: ModalState, action: Action): ModalState {
  switch (action.type) {
    case "OPEN":
      if (state.isModalOpen) {
        return state;
      }
      return {
        modalType: action.modalType,
        isModalOpen: true
      };
    case "CLOSE":
      return {
        modalType: "DEFAULT",
        isModalOpen: false
      };
    default:
      return state;
  }
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modalState, dispatch] = useReducer(modalReducer, {
    isModalOpen: false,
    modalType: "DEFAULT"
  });

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={modalState}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
}

export function useModalState() {
  const state = useContext(ModalStateContext);
  return state;
}

export function useModalDispatch() {
  const dispatch = useContext(ModalDispatchContext);
  if (!dispatch) throw new Error("ModalDispatchContext value not found");
  return dispatch;
}
