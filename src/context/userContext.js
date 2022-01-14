import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [modalState, setModalState] = useState({
    signInModal: false,
    signUpModal: false,
  });

  const toggleModal = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signInModal: true,
        signUpModal: false,
      });
    } else if (modal === "signUp") {
      setModalState({
        signInModal: false,
        signUpModal: true,
      });
    } else if (modal === "close") {
      setModalState({
        signInModal: false,
        signUpModal: false,
      });
    }
  };

  return (
    <UserContext.Provider value={{ modalState, toggleModal }}>
      {props.children}
    </UserContext.Provider>
  );
}
